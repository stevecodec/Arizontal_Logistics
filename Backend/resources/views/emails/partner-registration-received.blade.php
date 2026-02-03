<!DOCTYPE html>
<html>
<head>
    <title>New Owner-Operator Registration</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">New Owner-Operator Registration</h2>
        
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Company Information</h3>
            <p><strong>Company Name:</strong> {{ $registration->company_name }}</p>
            <p><strong>Contact Person:</strong> {{ $registration->title }}</p>
            <p><strong>Email:</strong> {{ $registration->email }}</p>
            <p><strong>Phone:</strong> {{ $registration->phone_number }}</p>
        </div>

        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Location</h3>
            <p>{{ $registration->street }}<br>
            {{ $registration->city }}, {{ $registration->post_code }}<br>
            {{ $registration->country }}</p>
        </div>

        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Fleet Information</h3>
            <p><strong>Total Fleet Size:</strong> {{ $registration->total_fleet_size }} vehicles</p>
        </div>

        <div style="background-color: #fef3c7; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Documents Uploaded:</strong></p>
            <ul>
                @if($registration->proof_of_identity_path)
                <li>Proof of Identity ✓</li>
                @endif
                @if($registration->cmr_insurance_path)
                <li>CMR Insurance ✓</li>
                @endif
                @if($registration->operators_licence_path)
                <li>Operators Licence ✓</li>
                @endif
            </ul>
        </div>

        <p style="color: #6b7280; font-size: 12px;">
            Registration ID: {{ $registration->id }}<br>
            Submitted at: {{ $registration->created_at->format('M d, Y H:i:s') }}
        </p>
    </div>
</body>
</html>
