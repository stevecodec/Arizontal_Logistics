<!DOCTYPE html>
<html>
<head>
    <title>Owner-Operator Registration Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">Thank You for Registering!</h2>
        
        <p>Dear {{ $registration->company_name }},</p>

        <p>Thank you for submitting your partner registration with Arizontal. We have received your application and all required documents.</p>

        <div style="background-color: #dbeafe; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <p style="margin: 0;"><strong>Registration ID:</strong> {{ $registration->id }}</p>
            <p style="margin: 10px 0 0 0;"><strong>Status:</strong> {{ ucfirst($registration->status) }}</p>
        </div>

        <p>Our team will review your application and get back to you within 2-3 business days. We carefully evaluate each application to ensure the best partnerships.</p>

        <h3 style="color: #2563eb;">What's Next?</h3>
        <ul>
            <li>Our team will review your documents and fleet information</li>
            <li>We may reach out for additional information if needed</li>
            <li>You'll receive an email notification with our decision</li>
        </ul>

        <p>If you have any questions in the meantime, please don't hesitate to contact us at <strong>partners@arizontal.com</strong> or call <strong>(919) 555-0123</strong>.</p>

        <p style="margin-top: 30px;">Best regards,<br>
        <strong>Arizontal Partnership Team</strong></p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        
        <p style="color: #6b7280; font-size: 12px;">
            This is an automated confirmation email. Please do not reply directly to this message.
        </p>
    </div>
</body>
</html>
