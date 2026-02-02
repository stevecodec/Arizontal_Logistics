<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    /**
     * Store a newly created contact submission.
     */
    public function store(StoreContactRequest $request): JsonResponse
    {
        $contact = Contact::create([
            'full_name' => $request->input('full_name'),
            'company' => $request->input('company'),
            'state' => $request->input('state'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'message' => $request->input('message'),
        ]);

        // TODO: Send email notification to admin
        // TODO: Send confirmation email to user

        return response()->json([
            'success' => true,
            'message' => 'Thank you for contacting us! We will get back to you soon.',
            'data' => [
                'id' => $contact->id,
            ],
        ], 201);
    }
}
