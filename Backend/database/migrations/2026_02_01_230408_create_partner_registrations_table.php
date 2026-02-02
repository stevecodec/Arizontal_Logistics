<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('partner_registrations', function (Blueprint $table) {
            $table->id();
            
            // Company Details
            $table->string('company_name');
            $table->string('street');
            $table->string('post_code', 20);
            $table->string('city');
            $table->string('country')->default('United States');
            
            // Personal Details
            $table->string('title', 10)->nullable(); // Ms, Mr
            $table->string('phone_number', 20);
            $table->string('email');
            
            // Fleet Details
            $table->integer('fleet_standard_tractor')->default(0);
            $table->integer('fleet_three_axle_tractor')->default(0);
            $table->integer('fleet_mega_tractor')->default(0);
            $table->integer('fleet_mega_tractor_adjustable')->default(0);
            $table->integer('fleet_jumbo_road_train')->default(0);
            $table->integer('fleet_curtain_sided_trailer')->default(0);
            $table->integer('fleet_mega_curtain_sided_trailer')->default(0);
            $table->integer('fleet_box_trailer')->default(0);
            $table->integer('fleet_frigo')->default(0);
            $table->integer('fleet_coil_skip_trailer')->default(0);
            $table->integer('fleet_paperliner')->default(0);
            $table->integer('fleet_double_deck_trailer')->default(0);
            
            // Document Paths
            $table->string('proof_of_identity_path')->nullable();
            $table->string('cmr_insurance_path')->nullable();
            $table->string('operators_licence_path')->nullable();
            
            // Agreement and Status
            $table->boolean('agreement_accepted')->default(false);
            $table->string('status')->default('pending'); // pending, approved, rejected, under_review
            $table->text('admin_notes')->nullable();
            
            $table->timestamps();
            
            $table->index(['status', 'created_at']);
            $table->index('email');
            $table->index('company_name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partner_registrations');
    }
};
