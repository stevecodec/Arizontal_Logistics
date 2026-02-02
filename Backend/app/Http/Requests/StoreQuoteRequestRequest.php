<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreQuoteRequestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'originCity' => 'required|string|max:255',
            'destinationCity' => 'required|string|max:255',
            'equipmentType' => 'required|string|in:Dry Van,Flatbed,Reefer,Step Deck',
            'weight' => 'required|string|max:255',
        ];
    }

    /**
     * Get custom attribute names for validator errors.
     */
    public function attributes(): array
    {
        return [
            'originCity' => 'origin city',
            'destinationCity' => 'destination city',
            'equipmentType' => 'equipment type',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        // Convert camelCase to snake_case for database
        $this->merge([
            'origin_city' => $this->originCity,
            'destination_city' => $this->destinationCity,
            'equipment_type' => $this->equipmentType,
        ]);
    }
}
