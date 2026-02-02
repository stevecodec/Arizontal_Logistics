<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDriverApplicationRequest extends FormRequest
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
            'fullName' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'experience' => 'required|string|max:255',
            'cdlType' => 'required|string|in:Class A,Class B,Class C',
            'addressLine1' => 'required|string|max:255',
            'addressLine2' => 'nullable|string|max:255',
            'city' => 'required|string|max:255',
            'state' => 'required|string|size:2',
            'zip' => 'required|string|max:10',
            'message' => 'nullable|string|max:1000',
        ];
    }

    /**
     * Get custom attribute names for validator errors.
     */
    public function attributes(): array
    {
        return [
            'fullName' => 'full name',
            'cdlType' => 'CDL type',
            'addressLine1' => 'address line 1',
            'addressLine2' => 'address line 2',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        // Convert camelCase to snake_case for database
        $this->merge([
            'full_name' => $this->fullName,
            'cdl_type' => $this->cdlType,
            'address_line1' => $this->addressLine1,
            'address_line2' => $this->addressLine2,
        ]);
    }
}
