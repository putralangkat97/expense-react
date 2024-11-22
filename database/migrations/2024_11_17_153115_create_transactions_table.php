<?php

use App\Models\Account;
use App\Models\Category;
use App\Models\User;
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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Category::class)
                ->constrained()
                ->onDelete('cascade');
            $table->foreignIdFor(Account::class)
                ->constrained()
                ->onDelete('cascade');
            $table->foreignIdFor(User::class)
                ->constrained()
                ->onDelete('cascade');
            $table->string('name');
            $table->datetime('transaction_date');
            $table->bigInteger('amount');
            $table->boolean('type');
            $table->string('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
