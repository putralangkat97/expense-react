<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\TransactionRequest;
use App\Repositories\TransactionRepository;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    use ApiResponse;

    public function __construct(protected TransactionRepository $transactionRepository) {}

    public function index()
    {
        $limit = request()->query('limit') ?? 5;
        $transaction_list = $this->transactionRepository->getTransactions($limit);
        return $this->success(
            message: 'Transaction list.',
            status_code: 200,
            data: $transaction_list,
        );
    }

    public function store(TransactionRequest $request)
    {
        $transaction_create = $this->transactionRepository->createTransaction($request);
        return $this->success(
            message: $transaction_create['message'],
            status_code: 201,
            data: $transaction_create['data'],
        );
    }

    public function show(string|int $transaction_id)
    {
        $transaction = $this->transactionRepository->getTransaction($transaction_id);
        return $this->success(
            message: 'Transaction detail.',
            status_code: 200,
            data: $transaction,
        );
    }

    public function update(TransactionRequest $request, string|int $transaction_id)
    {
        $transaction_update = $this->transactionRepository->updateTransaction($request, $transaction_id);
        return $this->success(
            message: $transaction_update['message'],
            status_code: 201,
            data: $transaction_update['data'],
        );
    }

    public function delete()
    {
        //
    }
}
