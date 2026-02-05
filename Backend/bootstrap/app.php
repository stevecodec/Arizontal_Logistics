<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Cache\RateLimiting\Limit;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // Configure trusted proxies for proper IP detection
        $middleware->trustProxies(at: '*', headers: Request::HEADER_X_FORWARDED_FOR | Request::HEADER_X_FORWARDED_HOST | Request::HEADER_X_FORWARDED_PORT | Request::HEADER_X_FORWARDED_PROTO);

        // Enable CORS for API routes
        $middleware->api(prepend: [
            \Illuminate\Http\Middleware\HandleCors::class,
        ]);

        // Add security headers middleware globally
        $middleware->append(\App\Http\Middleware\SecurityHeaders::class);

        // Configure rate limiting with better identifier
        RateLimiter::for('api', function (Request $request) {
            $identifier = $request->ip() . '|' . $request->userAgent();
            return Limit::perMinute(60)->by($identifier);
        });

        RateLimiter::for('contact', function (Request $request) {
            $identifier = $request->ip() . '|' . $request->userAgent();
            return Limit::perMinute(5)->by($identifier);
        });

        RateLimiter::for('registration', function (Request $request) {
            $identifier = $request->ip() . '|' . $request->userAgent();
            return Limit::perMinute(3)->by($identifier);
        });

        RateLimiter::for('quotes', function (Request $request) {
            $identifier = $request->ip() . '|' . $request->userAgent();
            return Limit::perMinute(10)->by($identifier);
        });
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        // Global exception handling
        $exceptions->render(function (NotFoundHttpException $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => 'Resource not found.',
                ], 404);
            }
        });

        $exceptions->render(function (HttpException $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => $e->getMessage() ?: 'An error occurred.',
                ], $e->getStatusCode());
            }
        });

        $exceptions->render(function (\Illuminate\Validation\ValidationException $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => 'The given data was invalid.',
                    'errors' => $e->errors(),
                ], 422);
            }
        });

        $exceptions->render(function (\Illuminate\Http\Exceptions\ThrottleRequestsException $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => 'Too many requests. Please slow down.',
                ], 429);
            }
        });

        $exceptions->render(function (\Throwable $e, Request $request) {
            if ($request->is('api/*')) {
                $statusCode = $e instanceof HttpException ? $e->getStatusCode() : 500;
                
                return response()->json([
                    'success' => false,
                    'message' => app()->environment('production') 
                        ? 'An error occurred processing your request.' 
                        : $e->getMessage(),
                ], $statusCode);
            }
        });
    })->create();
