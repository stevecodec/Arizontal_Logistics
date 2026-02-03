<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PartnerRegistrationResource extends JsonResource
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
            'company_name' => $this->company_name,
            'contact_person' => $this->title,
            'email' => $this->email,
            'phone' => $this->phone_number,
            'location' => [
                'street' => $this->street,
                'city' => $this->city,
                'post_code' => $this->post_code,
                'country' => $this->country,
            ],
            'fleet_size' => $this->total_fleet_size,
            'status' => $this->status,
            'created_at' => $this->created_at->toISOString(),
        ];
    }
}
