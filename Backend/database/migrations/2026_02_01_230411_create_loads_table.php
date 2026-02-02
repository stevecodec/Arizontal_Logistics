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
        Schema::create('loads', function (Blueprint $table) {
            $table->id();
            $table->string('load_number')->unique();
            $table->string('origin_city');
            $table->string('origin_state', 2);
            $table->string('destination_city');
            $table->string('destination_state', 2);
            $table->string('equipment_type');
            $table->string('weight');
            $table->decimal('rate', 10, 2);
            $table->date('pickup_date');
            $table->date('delivery_date')->nullable();
            $table->string('status')->default('available'); // available, assigned, in_transit, delivered, cancelled
            $table->text('description')->nullable();
            $table->timestamps();
            
            $table->index(['status', 'pickup_date']);
            $table->index('equipment_type');
            $table->index(['origin_state', 'destination_state']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loads');
    }
};
