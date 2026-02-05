<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Http\Resources\ContactResource;
use App\Mail\ContactConfirmation;
use App\Mail\ContactFormSubmitted;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Store a newly created contact submission.
     */
    public function store(StoreContactRequest $request): JsonResponse
    {
        try {
            DB::beginTransaction();

            $contact = Contact::create([
                'full_name' => $request->input('full_name'),
                'company' => $request->input('company'),
                'state' => $request->input('state'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                'message' => $request->input('message'),
            ]);

            DB::commit();

            // Send email notifications after successful transaction
            $adminEmail = config('mail.admin_email');
            if ($adminEmail) {
                Mail::to($adminEmail)->queue(new ContactFormSubmitted($contact));
            }

            // Send confirmation email to user
            Mail::to($contact->email)->queue(new ContactConfirmation($contact));

            Log::info('Contact form submitted', [
                'contact_id' => $contact->id,
                'email' => $contact->email
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Thank you for contacting us! We will get back to you soon.',
                'data' => new ContactResource($contact),
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            // Sanitized logging - no full request data
            Log::error('Contact form submission failed', [
                'error' => $e->getMessage(),
                'email' => $request->input('email'),
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Unable to process your request. Please try again or contact us directly.',
            ], 500);
        }
    }
}
