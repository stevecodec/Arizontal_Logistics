<!DOCTYPE html>
<html>
<head>
    <title>Thank You for Contacting Arizontal</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">Thank You for Reaching Out!</h2>
        
        <p>Dear {{ $contact->full_name }},</p>

        <p>Thank you for contacting Arizontal. We have received your message and one of our team members will get back to you shortly.</p>

        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="font-style: italic;">{{ Str::limit($contact->message, 150) }}</p>
        </div>

        <p>If you need immediate assistance, please call us at <strong>(919) 555-0123</strong> or email us at <strong>info@arizontallogistics.com</strong>.</p>

        <p style="margin-top: 30px;">Best regards,<br>
        <strong>The Arizontal Team</strong></p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        
        <p style="color: #6b7280; font-size: 12px;">
            This is an automated confirmation email. Please do not reply directly to this message.
        </p>
    </div>
</body>
</html>
