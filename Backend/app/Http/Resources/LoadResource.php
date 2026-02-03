<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadResource extends JsonResource
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
            'origin' => [
                'city' => $this->origin_city,
                'state' => $this->origin_state,
                'zip' => $this->origin_zip,
            ],
            'destination' => [
                'city' => $this->destination_city,
                'state' => $this->destination_state,
                'zip' => $this->destination_zip,
            ],
            'equipment_type' => $this->equipment_type,
            'weight' => $this->weight,
            'rate' => $this->rate,
            'pickup_date' => $this->pickup_date->toDateString(),
            'delivery_date' => $this->delivery_date?->toDateString(),
            'status' => $this->status,
            'posted_at' => $this->created_at->toISOString(),
        ];
    }
}
