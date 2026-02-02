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
        Schema::create('quote_requests', function (Blueprint $table) {
            $table->id();
            $table->string('origin_city');
            $table->string('destination_city');
            $table->string('equipment_type'); // Dry Van, Flatbed, Reefer, Step Deck
            $table->string('weight');
            $table->string('status')->default('pending'); // pending, quoted, accepted, rejected, expired
            $table->decimal('quoted_price', 10, 2)->nullable();
            $table->text('notes')->nullable();
            $table->timestamp('quoted_at')->nullable();
            $table->timestamps();
            
            $table->index(['status', 'created_at']);
            $table->index('equipment_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quote_requests');
    }
};
