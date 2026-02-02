<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePartnerRegistrationRequest extends FormRequest
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
            'companyName' => 'required|string|max:255',
            'street' => 'required|string|max:255',
            'postCode' => 'required|string|max:20',
            'city' => 'required|string|max:255',
            'country' => 'nullable|string|max:255',
            'title' => 'nullable|string|in:Ms,Mr',
            'phoneNumber' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            
            // Fleet details
            'fleet.standardTractor' => 'required|integer|min:0',
            'fleet.threeAxleTractor' => 'required|integer|min:0',
            'fleet.megaTractor' => 'required|integer|min:0',
            'fleet.megaTractorAdjustable' => 'required|integer|min:0',
            'fleet.jumboRoadTrain' => 'required|integer|min:0',
            'fleet.curtainSidedTrailer' => 'required|integer|min:0',
            'fleet.megaCurtainSidedTrailer' => 'required|integer|min:0',
            'fleet.boxTrailer' => 'required|integer|min:0',
            'fleet.frigo' => 'required|integer|min:0',
            'fleet.coilSkipTrailer' => 'required|integer|min:0',
            'fleet.paperliner' => 'required|integer|min:0',
            'fleet.doubleDeckTrailer' => 'required|integer|min:0',
            
            // Document uploads
            'proofOfIdentity' => 'required|file|mimes:pdf,jpg,jpeg,png|max:10240',
            'cmrInsurance' => 'required|file|mimes:pdf,jpg,jpeg,png|max:10240',
            'operatorsLicence' => 'required|file|mimes:pdf,jpg,jpeg,png|max:10240',
            
            'agreementAccepted' => 'required|accepted',
        ];
    }

    /**
     * Get custom attribute names for validator errors.
     */
    public function attributes(): array
    {
        return [
            'companyName' => 'company name',
            'postCode' => 'post code',
            'phoneNumber' => 'phone number',
            'proofOfIdentity' => 'proof of identity',
            'cmrInsurance' => 'CMR insurance',
            'operatorsLicence' => 'operators licence',
            'agreementAccepted' => 'terms agreement',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        // Convert camelCase to snake_case for database
        $fleetData = $this->input('fleet', []);
        
        $this->merge([
            'company_name' => $this->companyName,
            'post_code' => $this->postCode,
            'phone_number' => $this->phoneNumber,
            'fleet_standard_tractor' => $fleetData['standardTractor'] ?? 0,
            'fleet_three_axle_tractor' => $fleetData['threeAxleTractor'] ?? 0,
            'fleet_mega_tractor' => $fleetData['megaTractor'] ?? 0,
            'fleet_mega_tractor_adjustable' => $fleetData['megaTractorAdjustable'] ?? 0,
            'fleet_jumbo_road_train' => $fleetData['jumboRoadTrain'] ?? 0,
            'fleet_curtain_sided_trailer' => $fleetData['curtainSidedTrailer'] ?? 0,
            'fleet_mega_curtain_sided_trailer' => $fleetData['megaCurtainSidedTrailer'] ?? 0,
            'fleet_box_trailer' => $fleetData['boxTrailer'] ?? 0,
            'fleet_frigo' => $fleetData['frigo'] ?? 0,
            'fleet_coil_skip_trailer' => $fleetData['coilSkipTrailer'] ?? 0,
            'fleet_paperliner' => $fleetData['paperliner'] ?? 0,
            'fleet_double_deck_trailer' => $fleetData['doubleDeckTrailer'] ?? 0,
            'agreement_accepted' => $this->agreementAccepted,
        ]);
    }
}
