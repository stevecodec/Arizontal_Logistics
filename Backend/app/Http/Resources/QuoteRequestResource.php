<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuoteRequestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'origin_city' => $this->origin_city,
            'destination_city' => $this->destination_city,
            'equipment_type' => $this->equipment_type,
            'weight' => $this->weight,
            'status' => $this->status,
            'created_at' => $this->created_at->toISOString(),
        ];
    }
}
