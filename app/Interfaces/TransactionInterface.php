<?php

namespace App\Interfaces;

use App\Http\Requests\API\TransactionRequest;
use Illuminate\Support\Collection;

interface TransactionInterface
{
    public function getTransactions(int|null $limit = 5): Collection;
    public function getTransaction(string|int $transaction_id): Collection;
    public function createTransaction(TransactionRequest $request): array;
    public function updateTransaction(TransactionRequest $request, string|int $transaction_id): array;
}
