New Contact Form Submission

Name: {{ $contact->full_name }}
Company: {{ $contact->company }}
State: {{ $contact->state }}
Phone: {{ $contact->phone }}
Email: {{ $contact->email }}

Message:
{{ $contact->message }}

Submitted at: {{ $contact->created_at->format('M d, Y H:i:s') }}
