New Owner-Operator Registration

Company Information:
Company Name: {{ $registration->company_name }}
Contact Person: {{ $registration->title }}
Email: {{ $registration->email }}
Phone: {{ $registration->phone_number }}

Location:
{{ $registration->street }}
{{ $registration->city }}, {{ $registration->post_code }}
{{ $registration->country }}

Fleet Information:
Total Fleet Size: {{ $registration->total_fleet_size }} vehicles

Documents Uploaded:
@if($registration->proof_of_identity_path)- Proof of Identity ✓
@endif
@if($registration->cmr_insurance_path)- CMR Insurance ✓
@endif
@if($registration->operators_licence_path)- Operators Licence ✓
@endif

Registration ID: {{ $registration->id }}
Submitted at: {{ $registration->created_at->format('M d, Y H:i:s') }}
