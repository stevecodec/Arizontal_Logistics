<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Load;
use Illuminate\Http\JsonResponse;

class LoadController extends Controller
{
    /**
     * Get the count of available loads.
     */
    public function count(): JsonResponse
    {
        $count = Load::available()->count();

        return response()->json([
            'success' => true,
            'data' => [
                'count' => $count,
            ],
        ]);
    }

    /**
     * Display a listing of available loads.
     */
    public function index(): JsonResponse
    {
        $loads = Load::available()
            ->upcoming()
            ->paginate(20);

        return response()->json([
            'success' => true,
            'data' => $loads,
        ]);
    }
}
