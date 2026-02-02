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
        Schema::create('driver_applications', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('phone', 20);
            $table->string('email');
            $table->string('experience');
            $table->string('cdl_type'); // Class A, Class B, Class C
            $table->string('address_line1');
            $table->string('address_line2')->nullable();
            $table->string('city');
            $table->string('state', 2);
            $table->string('zip', 10);
            $table->text('message')->nullable();
            $table->string('status')->default('new'); // new, reviewing, interview_scheduled, hired, rejected
            $table->text('admin_notes')->nullable();
            $table->timestamps();
            
            $table->index(['status', 'created_at']);
            $table->index('email');
            $table->index('cdl_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('driver_applications');
    }
};
