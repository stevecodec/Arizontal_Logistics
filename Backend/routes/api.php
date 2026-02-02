<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\DriverApplicationController;
use App\Http\Controllers\Api\LoadController;
use App\Http\Controllers\Api\PartnerRegistrationController;
use App\Http\Controllers\Api\QuoteRequestController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Contact form submission
Route::post('/contact', [ContactController::class, 'store']);

// Partner/Carrier registration
Route::post('/partners/register', [PartnerRegistrationController::class, 'store']);

// Driver applications
Route::post('/careers/apply', [DriverApplicationController::class, 'store']);

// Quote requests
Route::post('/quotes/request', [QuoteRequestController::class, 'store']);

// Loads
Route::get('/loads/count', [LoadController::class, 'count']);
Route::get('/loads', [LoadController::class, 'index']);
