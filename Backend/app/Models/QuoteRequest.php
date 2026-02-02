<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuoteRequest extends Model
{
    protected $fillable = [
        'origin_city',
        'destination_city',
        'equipment_type',
        'weight',
        'status',
        'quoted_price',
        'notes',
        'quoted_at',
    ];

    protected $casts = [
        'quoted_price' => 'decimal:2',
        'quoted_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Status constants
    const STATUS_PENDING = 'pending';
    const STATUS_QUOTED = 'quoted';
    const STATUS_ACCEPTED = 'accepted';
    const STATUS_REJECTED = 'rejected';
    const STATUS_EXPIRED = 'expired';

    // Equipment types
    const EQUIPMENT_DRY_VAN = 'Dry Van';
    const EQUIPMENT_FLATBED = 'Flatbed';
    const EQUIPMENT_REEFER = 'Reefer';
    const EQUIPMENT_STEP_DECK = 'Step Deck';

    public function scopePending($query)
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    public function scopeQuoted($query)
    {
        return $query->where('status', self::STATUS_QUOTED);
    }

    public function scopeRecent($query)
    {
        return $query->orderBy('created_at', 'desc');
    }
}
