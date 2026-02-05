<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LoadResource;
use App\Models\Load;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LoadController extends Controller
{
    /**
     * Get the count of available loads.
     */
    public function count(): JsonResponse
    {
        try {
            $count = Load::available()->count();

            return response()->json([
                'success' => true,
                'data' => [
                    'count' => $count,
                ],
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to fetch load count', [
                'error' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Unable to fetch load count.',
            ], 500);
        }
    }

    /**
     * Display a listing of available loads.
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Load::available()->upcoming();

            // Optional filters - sanitize input
            if ($request->filled('origin')) {
                $origin = $request->input('origin');
                // Escape LIKE special characters
                $origin = str_replace(['%', '_'], ['\%', '\_'], $origin);
                $query->where('origin_city', 'like', '%' . $origin . '%');
            }

            if ($request->filled('destination')) {
                $destination = $request->input('destination');
                // Escape LIKE special characters
                $destination = str_replace(['%', '_'], ['\%', '\_'], $destination);
                $query->where('destination_city', 'like', '%' . $destination . '%');
            }

            if ($request->filled('equipment_type')) {
                $query->where('equipment_type', $request->input('equipment_type'));
            }

            $perPage = $request->integer('per_page', 20);
            $loads = $query->paginate(min($perPage, 100));

            return response()->json([
                'success' => true,
                'data' => LoadResource::collection($loads)->response()->getData(),
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to fetch loads', [
                'error' => $e->getMessage(),
                'filters' => [
                    'origin' => $request->input('origin'),
                    'destination' => $request->input('destination'),
                    'equipment_type' => $request->input('equipment_type')
                ],
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Unable to fetch loads.',
            ], 500);
        }
    }
}
