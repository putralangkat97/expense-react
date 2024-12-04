<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Food', 'type' => 'out'],
            ['name' => 'Market', 'type' => 'in'],
            ['name' => 'Shopping', 'type' => 'out'],
            ['name' => 'Bill', 'type' => 'in'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
