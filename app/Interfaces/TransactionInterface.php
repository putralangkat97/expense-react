<?php

namespace App\Interfaces;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

interface TransactionInterface
{
    public function getTransactions(): Collection;
    public function getTransaction(string|int $transaction_id): Collection;
    public function createTransaction(Request $request);
    public function updateTransaction(Request $request, string|int $transaction_id);
}
