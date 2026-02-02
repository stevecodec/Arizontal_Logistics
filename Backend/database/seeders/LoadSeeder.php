<?php

namespace Database\Seeders;

use App\Models\Load;
use Illuminate\Database\Seeder;

class LoadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $loads = [
            [
                'load_number' => 'LD-' . strtoupper(substr(md5(uniqid()), 0, 8)),
                'origin_city' => 'Phoenix',
                'origin_state' => 'AZ',
                'destination_city' => 'Los Angeles',
                'destination_state' => 'CA',
                'equipment_type' => 'Dry Van',
                'weight' => '20,000 lbs',
                'rate' => 1200.00,
                'pickup_date' => now()->addDays(2)->toDateString(),
                'status' => 'available',
                'description' => 'General freight, no hazmat',
            ],
            [
                'load_number' => 'LD-' . strtoupper(substr(md5(uniqid()), 0, 8)),
                'origin_city' => 'Tucson',
                'origin_state' => 'AZ',
                'destination_city' => 'San Diego',
                'destination_state' => 'CA',
                'equipment_type' => 'Flatbed',
                'weight' => '35,000 lbs',
                'rate' => 1500.00,
                'pickup_date' => now()->addDays(3)->toDateString(),
                'status' => 'available',
                'description' => 'Construction materials',
            ],
            [
                'load_number' => 'LD-' . strtoupper(substr(md5(uniqid()), 0, 8)),
                'origin_city' => 'Phoenix',
                'origin_state' => 'AZ',
                'destination_city' => 'Las Vegas',
                'destination_state' => 'NV',
                'equipment_type' => 'Reefer',
                'weight' => '18,000 lbs',
                'rate' => 900.00,
                'pickup_date' => now()->addDays(1)->toDateString(),
                'status' => 'available',
                'description' => 'Temperature controlled goods',
            ],
            [
                'load_number' => 'LD-' . strtoupper(substr(md5(uniqid()), 0, 8)),
                'origin_city' => 'Flagstaff',
                'origin_state' => 'AZ',
                'destination_city' => 'Denver',
                'destination_state' => 'CO',
                'equipment_type' => 'Dry Van',
                'weight' => '22,000 lbs',
                'rate' => 1400.00,
                'pickup_date' => now()->addDays(4)->toDateString(),
                'status' => 'available',
                'description' => 'Retail goods',
            ],
            [
                'load_number' => 'LD-' . strtoupper(substr(md5(uniqid()), 0, 8)),
                'origin_city' => 'Mesa',
                'origin_state' => 'AZ',
                'destination_city' => 'Albuquerque',
                'destination_state' => 'NM',
                'equipment_type' => 'Step Deck',
                'weight' => '40,000 lbs',
                'rate' => 1800.00,
                'pickup_date' => now()->addDays(5)->toDateString(),
                'status' => 'available',
                'description' => 'Oversized equipment',
            ],
        ];

        foreach ($loads as $load) {
            Load::create($load);
        }
    }
}
