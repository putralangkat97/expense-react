<?php

namespace App\Http\Controllers\APP;

use App\Enums\FrequencyEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\TransactionRequest;
use App\Models\Category;
use App\Repositories\AccountRepository;
use App\Repositories\TransactionRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function __construct(
        protected TransactionRepository $transaction_repository,
        protected AccountRepository $account_repository
    ) {}

    public function index(string|int|null $id = null)
    {
        $categories = Category::orderBy('name')
            ->get();
        $categories_mapped = $categories->map(function ($data) {
            return [
                'id' => $data->id,
                'name' => ucwords($data->name),
                'type' => $data->type,
            ];
        });
        $account = $this->account_repository->getAccounts();
        $transactions = $this->transaction_repository->getTransactions();

        if ($id) {
            return Inertia::render('App/Transaction/ViewTransaction', [
                'transactions' => $this->transaction_repository->getTransaction($id)[0],
                'categories' => $categories_mapped,
                'accounts' => $account['accounts'],
                'frequencies' => FrequencyEnum::optionToIndonesia(),
            ]);
        }
        return Inertia::render('App/Transaction', [
            'transactions' => $transactions,
            'categories' => $categories_mapped,
            'accounts' => $account['accounts'],
            'frequencies' => FrequencyEnum::optionToIndonesia(),
        ]);
    }

    public function store(TransactionRequest $request)
    {
        $transaction_create = $this->transaction_repository->createTransaction($request);
        session()->flash($transaction_create['type'], $transaction_create['message']);
    }

    public function update(TransactionRequest $request, string|int $transaction_id)
    {
        $transaction_update = $this->transaction_repository->updateTransaction($request, $transaction_id);
        session()->flash($transaction_update['type'], $transaction_update['message']);
    }
}
