<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> {{ $contact->full_name }}</p>
            <p><strong>Company:</strong> {{ $contact->company }}</p>
            <p><strong>State:</strong> {{ $contact->state }}</p>
            <p><strong>Phone:</strong> {{ $contact->phone }}</p>
            <p><strong>Email:</strong> {{ $contact->email }}</p>
        </div>

        <div style="margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb;">
                {{ $contact->message }}
            </p>
        </div>

        <p style="color: #6b7280; font-size: 12px;">
            Submitted at: {{ $contact->created_at->format('M d, Y H:i:s') }}
        </p>
    </div>
</body>
</html>
