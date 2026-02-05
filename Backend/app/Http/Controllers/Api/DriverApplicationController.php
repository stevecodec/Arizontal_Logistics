<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDriverApplicationRequest;
use App\Models\DriverApplication;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DriverApplicationController extends Controller
{
    /**
     * Store a newly created driver application.
     */
    public function store(StoreDriverApplicationRequest $request): JsonResponse
    {
        try {
            DB::beginTransaction();

            $application = DriverApplication::create([
                'full_name' => $request->input('full_name'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                'experience' => $request->input('experience'),
                'cdl_type' => $request->input('cdl_type'),
                'address_line1' => $request->input('address_line1'),
                'address_line2' => $request->input('address_line2'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'zip' => $request->input('zip'),
                'message' => $request->input('message'),
            ]);

            DB::commit();

            // TODO: Send email notification to HR
            // TODO: Send confirmation email to applicant

            Log::info('Driver application submitted', [
                'application_id' => $application->id,
                'email' => $application->email,
                'cdl_type' => $application->cdl_type
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Thank you for applying! We will review your application and get back to you soon.',
                'data' => [
                    'id' => $application->id,
                ],
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            // Sanitized logging - no full request data
            Log::error('Driver application submission failed', [
                'error' => $e->getMessage(),
                'email' => $request->input('email'),
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Unable to process your application. Please try again or contact us directly.',
            ], 500);
        }
    }
}
