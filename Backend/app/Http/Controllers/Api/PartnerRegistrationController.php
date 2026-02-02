<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePartnerRegistrationRequest;
use App\Models\PartnerRegistration;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class PartnerRegistrationController extends Controller
{
    /**
     * Store a newly created partner registration.
     */
    public function store(StorePartnerRegistrationRequest $request): JsonResponse
    {
        // Handle file uploads
        $proofOfIdentityPath = null;
        $cmrInsurancePath = null;
        $operatorsLicencePath = null;

        if ($request->hasFile('proofOfIdentity')) {
            $proofOfIdentityPath = $request->file('proofOfIdentity')
                ->store('partner-documents/proof-of-identity', 'public');
        }

        if ($request->hasFile('cmrInsurance')) {
            $cmrInsurancePath = $request->file('cmrInsurance')
                ->store('partner-documents/cmr-insurance', 'public');
        }

        if ($request->hasFile('operatorsLicence')) {
            $operatorsLicencePath = $request->file('operatorsLicence')
                ->store('partner-documents/operators-licence', 'public');
        }

        $registration = PartnerRegistration::create([
            'company_name' => $request->input('company_name'),
            'street' => $request->input('street'),
            'post_code' => $request->input('post_code'),
            'city' => $request->input('city'),
            'country' => $request->input('country', 'United States'),
            'title' => $request->input('title'),
            'phone_number' => $request->input('phone_number'),
            'email' => $request->input('email'),
            'fleet_standard_tractor' => $request->input('fleet_standard_tractor'),
            'fleet_three_axle_tractor' => $request->input('fleet_three_axle_tractor'),
            'fleet_mega_tractor' => $request->input('fleet_mega_tractor'),
            'fleet_mega_tractor_adjustable' => $request->input('fleet_mega_tractor_adjustable'),
            'fleet_jumbo_road_train' => $request->input('fleet_jumbo_road_train'),
            'fleet_curtain_sided_trailer' => $request->input('fleet_curtain_sided_trailer'),
            'fleet_mega_curtain_sided_trailer' => $request->input('fleet_mega_curtain_sided_trailer'),
            'fleet_box_trailer' => $request->input('fleet_box_trailer'),
            'fleet_frigo' => $request->input('fleet_frigo'),
            'fleet_coil_skip_trailer' => $request->input('fleet_coil_skip_trailer'),
            'fleet_paperliner' => $request->input('fleet_paperliner'),
            'fleet_double_deck_trailer' => $request->input('fleet_double_deck_trailer'),
            'proof_of_identity_path' => $proofOfIdentityPath,
            'cmr_insurance_path' => $cmrInsurancePath,
            'operators_licence_path' => $operatorsLicencePath,
            'agreement_accepted' => $request->input('agreement_accepted'),
        ]);

        // TODO: Send email notification to admin
        // TODO: Send confirmation email to partner

        return response()->json([
            'success' => true,
            'message' => 'Thank you for registering! Your application is being reviewed.',
            'data' => [
                'id' => $registration->id,
                'status' => $registration->status,
            ],
        ], 201);
    }
}
