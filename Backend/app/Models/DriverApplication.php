<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DriverApplication extends Model
{
    protected $fillable = [
        'full_name',
        'phone',
        'email',
        'experience',
        'cdl_type',
        'address_line1',
        'address_line2',
        'city',
        'state',
        'zip',
        'message',
        'status',
        'admin_notes',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Status constants
    const STATUS_NEW = 'new';
    const STATUS_REVIEWING = 'reviewing';
    const STATUS_INTERVIEW_SCHEDULED = 'interview_scheduled';
    const STATUS_HIRED = 'hired';
    const STATUS_REJECTED = 'rejected';

    // CDL Type constants
    const CDL_CLASS_A = 'Class A';
    const CDL_CLASS_B = 'Class B';
    const CDL_CLASS_C = 'Class C';

    public function scopeNew($query)
    {
        return $query->where('status', self::STATUS_NEW);
    }

    public function scopeRecent($query)
    {
        return $query->orderBy('created_at', 'desc');
    }

    public function getFullAddressAttribute()
    {
        $address = $this->address_line1;
        if ($this->address_line2) {
            $address .= ', ' . $this->address_line2;
        }
        return "{$address}, {$this->city}, {$this->state} {$this->zip}";
    }
}
