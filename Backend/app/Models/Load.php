<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Load extends Model
{
    protected $fillable = [
        'load_number',
        'origin_city',
        'origin_state',
        'destination_city',
        'destination_state',
        'equipment_type',
        'weight',
        'rate',
        'pickup_date',
        'delivery_date',
        'status',
        'description',
    ];

    protected $casts = [
        'rate' => 'decimal:2',
        'pickup_date' => 'date',
        'delivery_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Status constants
    const STATUS_AVAILABLE = 'available';
    const STATUS_ASSIGNED = 'assigned';
    const STATUS_IN_TRANSIT = 'in_transit';
    const STATUS_DELIVERED = 'delivered';
    const STATUS_CANCELLED = 'cancelled';

    protected static function booted(): void
    {
        static::creating(function ($load) {
            if (empty($load->load_number)) {
                $load->load_number = self::generateLoadNumber();
            }
        });
    }

    public static function generateLoadNumber()
    {
        do {
            $number = 'LD-' . strtoupper(Str::random(8));
        } while (self::where('load_number', $number)->exists());

        return $number;
    }

    public function scopeAvailable($query)
    {
        return $query->where('status', self::STATUS_AVAILABLE);
    }

    public function scopeUpcoming($query)
    {
        return $query->where('pickup_date', '>=', now()->toDateString())
                     ->orderBy('pickup_date');
    }

    public function getOriginAttribute()
    {
        return "{$this->origin_city}, {$this->origin_state}";
    }

    public function getDestinationAttribute()
    {
        return "{$this->destination_city}, {$this->destination_state}";
    }
}
