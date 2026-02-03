<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LoadResource;
use App\Models\Load;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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

            // Optional filters
            if ($request->filled('origin')) {
                $query->where('origin_city', 'like', '%' . $request->input('origin') . '%');
            }

            if ($request->filled('destination')) {
                $query->where('destination_city', 'like', '%' . $request->input('destination') . '%');
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
            return response()->json([
                'success' => false,
                'message' => 'Unable to fetch loads.',
            ], 500);
        }
    }
}
