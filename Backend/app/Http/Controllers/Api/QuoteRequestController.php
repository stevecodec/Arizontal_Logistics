<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuoteRequestRequest;
use App\Models\QuoteRequest;
use Illuminate\Http\JsonResponse;

class QuoteRequestController extends Controller
{
    /**
     * Store a newly created quote request.
     */
    public function store(StoreQuoteRequestRequest $request): JsonResponse
    {
        $quoteRequest = QuoteRequest::create([
            'origin_city' => $request->input('origin_city'),
            'destination_city' => $request->input('destination_city'),
            'equipment_type' => $request->input('equipment_type'),
            'weight' => $request->input('weight'),
        ]);

        // TODO: Send email notification to sales team
        // TODO: Optionally send confirmation to user

        return response()->json([
            'success' => true,
            'message' => 'Quote request received! Our team will get back to you with a quote shortly.',
            'data' => [
                'id' => $quoteRequest->id,
                'status' => $quoteRequest->status,
            ],
        ], 201);
    }
}
