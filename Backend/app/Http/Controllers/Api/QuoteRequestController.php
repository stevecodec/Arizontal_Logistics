<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuoteRequestRequest;
use App\Http\Resources\QuoteRequestResource;
use App\Mail\QuoteRequestReceived;
use App\Models\QuoteRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class QuoteRequestController extends Controller
{
    /**
     * Store a newly created quote request.
     */
    public function store(StoreQuoteRequestRequest $request): JsonResponse
    {
        try {
            DB::beginTransaction();

            $quoteRequest = QuoteRequest::create([
                'origin_city' => $request->input('origin_city'),
                'destination_city' => $request->input('destination_city'),
                'equipment_type' => $request->input('equipment_type'),
                'weight' => $request->input('weight'),
            ]);

            DB::commit();

            // Send email notification to sales team after successful transaction
            $salesEmail = config('mail.sales_email', config('mail.admin_email'));
            if ($salesEmail) {
                Mail::to($salesEmail)->queue(new QuoteRequestReceived($quoteRequest));
            }

            Log::info('Quote request submitted', [
                'quote_id' => $quoteRequest->id,
                'origin' => $quoteRequest->origin_city,
                'destination' => $quoteRequest->destination_city
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Quote request received! Our team will get back to you with a quote shortly.',
                'data' => new QuoteRequestResource($quoteRequest),
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            // Sanitized logging - no full request data
            Log::error('Quote request submission failed', [
                'error' => $e->getMessage(),
                'origin_city' => $request->input('origin_city'),
                'destination_city' => $request->input('destination_city'),
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Unable to process your request. Please try again.',
            ], 500);
        }
    }
}
