<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Http\Resources\ContactResource;
use App\Mail\ContactConfirmation;
use App\Mail\ContactFormSubmitted;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
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
            $contact = Contact::create([
                'full_name' => $request->input('full_name'),
                'company' => $request->input('company'),
                'state' => $request->input('state'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                'message' => $request->input('message'),
            ]);

            // Send email notification to admin
            $adminEmail = config('mail.admin_email');
            if ($adminEmail) {
                Mail::to($adminEmail)->queue(new ContactFormSubmitted($contact));
            }

            // Send confirmation email to user
            Mail::to($contact->email)->queue(new ContactConfirmation($contact));

            Log::info('Contact form submitted', ['contact_id' => $contact->id]);

            return response()->json([
                'success' => true,
                'message' => 'Thank you for contacting us! We will get back to you soon.',
                'data' => new ContactResource($contact),
            ], 201);
        } catch (\Exception $e) {
            Log::error('Contact form submission failed', [
                'error' => $e->getMessage(),
                'request' => $request->all()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Unable to process your request. Please try again or contact us directly.',
            ], 500);
        }
    }
}
