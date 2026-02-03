New Quote Request

Shipment Details:
Origin: {{ $quoteRequest->origin_city }}
Destination: {{ $quoteRequest->destination_city }}
Equipment Type: {{ $quoteRequest->equipment_type }}
Weight: {{ $quoteRequest->weight }}

Quote Request ID: {{ $quoteRequest->id }}
Status: {{ ucfirst($quoteRequest->status) }}

Submitted at: {{ $quoteRequest->created_at->format('M d, Y H:i:s') }}
