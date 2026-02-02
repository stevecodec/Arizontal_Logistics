<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PartnerRegistration extends Model
{
    protected $fillable = [
        'company_name',
        'street',
        'post_code',
        'city',
        'country',
        'title',
        'phone_number',
        'email',
        'fleet_standard_tractor',
        'fleet_three_axle_tractor',
        'fleet_mega_tractor',
        'fleet_mega_tractor_adjustable',
        'fleet_jumbo_road_train',
        'fleet_curtain_sided_trailer',
        'fleet_mega_curtain_sided_trailer',
        'fleet_box_trailer',
        'fleet_frigo',
        'fleet_coil_skip_trailer',
        'fleet_paperliner',
        'fleet_double_deck_trailer',
        'proof_of_identity_path',
        'cmr_insurance_path',
        'operators_licence_path',
        'agreement_accepted',
        'status',
        'admin_notes',
    ];

    protected $casts = [
        'fleet_standard_tractor' => 'integer',
        'fleet_three_axle_tractor' => 'integer',
        'fleet_mega_tractor' => 'integer',
        'fleet_mega_tractor_adjustable' => 'integer',
        'fleet_jumbo_road_train' => 'integer',
        'fleet_curtain_sided_trailer' => 'integer',
        'fleet_mega_curtain_sided_trailer' => 'integer',
        'fleet_box_trailer' => 'integer',
        'fleet_frigo' => 'integer',
        'fleet_coil_skip_trailer' => 'integer',
        'fleet_paperliner' => 'integer',
        'fleet_double_deck_trailer' => 'integer',
        'agreement_accepted' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Status constants
    const STATUS_PENDING = 'pending';
    const STATUS_APPROVED = 'approved';
    const STATUS_REJECTED = 'rejected';
    const STATUS_UNDER_REVIEW = 'under_review';

    public function getTotalFleetSizeAttribute()
    {
        return $this->fleet_standard_tractor +
               $this->fleet_three_axle_tractor +
               $this->fleet_mega_tractor +
               $this->fleet_mega_tractor_adjustable +
               $this->fleet_jumbo_road_train +
               $this->fleet_curtain_sided_trailer +
               $this->fleet_mega_curtain_sided_trailer +
               $this->fleet_box_trailer +
               $this->fleet_frigo +
               $this->fleet_coil_skip_trailer +
               $this->fleet_paperliner +
               $this->fleet_double_deck_trailer;
    }

    public function scopePending($query)
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    public function scopeApproved($query)
    {
        return $query->where('status', self::STATUS_APPROVED);
    }
}
