<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePartnerRegistrationRequest;
use App\Http\Resources\PartnerRegistrationResource;
use App\Mail\PartnerConfirmation;
use App\Mail\PartnerRegistrationReceived;
use App\Models\PartnerRegistration;
use App\Services\FileUploadService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class PartnerRegistrationController extends Controller
{
    public function __construct(
        private FileUploadService $fileUploadService
    ) {}

    /**
     * Store a newly created partner registration.
     */
    public function store(StorePartnerRegistrationRequest $request): JsonResponse
    {
        $uploadedFiles = [];
        
        try {
            // Handle file uploads BEFORE transaction
            // This prevents orphaned files if transaction fails
            $proofOfIdentityPath = null;
            $cmrInsurancePath = null;
            $operatorsLicencePath = null;

            if ($request->hasFile('proofOfIdentity')) {
                $proofOfIdentityPath = $this->fileUploadService->uploadDocument(
                    $request->file('proofOfIdentity'),
                    'partner-documents/proof-of-identity'
                );
                $uploadedFiles[] = $proofOfIdentityPath;
            }

            if ($request->hasFile('cmrInsurance')) {
                $cmrInsurancePath = $this->fileUploadService->uploadDocument(
                    $request->file('cmrInsurance'),
                    'partner-documents/cmr-insurance'
                );
                $uploadedFiles[] = $cmrInsurancePath;
            }

            if ($request->hasFile('operatorsLicence')) {
                $operatorsLicencePath = $this->fileUploadService->uploadDocument(
                    $request->file('operatorsLicence'),
                    'partner-documents/operators-licence'
                );
                $uploadedFiles[] = $operatorsLicencePath;
            }

            // Now start transaction for database operations
            DB::beginTransaction();

            $registration = PartnerRegistration::create([
                'company_name' => $request->input('company_name'),
                'street' => $request->input('street'),
                'post_code' => $request->input('post_code'),
                'city' => $request->input('city'),
                'country' => $request->input('country', 'United States'),
                'title' => $request->input('title'),
                'phone_number' => $request->input('phone_number'),
                'email' => $request->input('email'),
                'fleet_standard_tractor' => $request->input('fleet_standard_tractor', 0),
                'fleet_three_axle_tractor' => $request->input('fleet_three_axle_tractor', 0),
                'fleet_mega_tractor' => $request->input('fleet_mega_tractor', 0),
                'fleet_mega_tractor_adjustable' => $request->input('fleet_mega_tractor_adjustable', 0),
                'fleet_jumbo_road_train' => $request->input('fleet_jumbo_road_train', 0),
                'fleet_curtain_sided_trailer' => $request->input('fleet_curtain_sided_trailer', 0),
                'fleet_mega_curtain_sided_trailer' => $request->input('fleet_mega_curtain_sided_trailer', 0),
                'fleet_box_trailer' => $request->input('fleet_box_trailer', 0),
                'fleet_frigo' => $request->input('fleet_frigo', 0),
                'fleet_coil_skip_trailer' => $request->input('fleet_coil_skip_trailer', 0),
                'fleet_paperliner' => $request->input('fleet_paperliner', 0),
                'fleet_double_deck_trailer' => $request->input('fleet_double_deck_trailer', 0),
                'proof_of_identity_path' => $proofOfIdentityPath,
                'cmr_insurance_path' => $cmrInsurancePath,
                'operators_licence_path' => $operatorsLicencePath,
                'agreement_accepted' => $request->boolean('agreement_accepted'),
            ]);

            DB::commit();

            // Send email notifications after successful transaction (queued for performance)
            $adminEmail = config('mail.admin_email');
            if ($adminEmail) {
                Mail::to($adminEmail)->queue(new PartnerRegistrationReceived($registration));
            }

            Mail::to($registration->email)->queue(new PartnerConfirmation($registration));

            Log::info('Partner registration submitted', [
                'registration_id' => $registration->id,
                'company_name' => $registration->company_name,
                'email' => $registration->email
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Thank you for registering! Your application is being reviewed.',
                'data' => new PartnerRegistrationResource($registration),
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            // Clean up uploaded files on failure
            foreach ($uploadedFiles as $filePath) {
                $this->fileUploadService->deleteFile($filePath);
            }

            // Sanitized logging - no full request data or trace
            Log::error('Partner registration failed', [
                'error' => $e->getMessage(),
                'email' => $request->input('email'),
                'company_name' => $request->input('company_name'),
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Unable to process your registration. Please try again or contact us directly.',
            ], 500);
        }
    }
}
