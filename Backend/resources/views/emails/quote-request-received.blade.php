<!DOCTYPE html>
<html>
<head>
    <title>New Quote Request</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">New Quote Request</h2>
        
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Shipment Details</h3>
            <p><strong>Origin:</strong> {{ $quoteRequest->origin_city }}</p>
            <p><strong>Destination:</strong> {{ $quoteRequest->destination_city }}</p>
            <p><strong>Equipment Type:</strong> {{ $quoteRequest->equipment_type }}</p>
            <p><strong>Weight:</strong> {{ $quoteRequest->weight }}</p>
        </div>

        <div style="background-color: #dbeafe; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Quote Request ID:</strong> {{ $quoteRequest->id }}</p>
            <p style="margin: 10px 0 0 0;"><strong>Status:</strong> {{ ucfirst($quoteRequest->status) }}</p>
        </div>

        <p style="color: #6b7280; font-size: 12px;">
            Submitted at: {{ $quoteRequest->created_at->format('M d, Y H:i:s') }}
        </p>
    </div>
</body>
</html>
