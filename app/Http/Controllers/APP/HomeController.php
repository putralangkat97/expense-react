<?php

namespace App\Http\Controllers\APP;

use App\Enums\FrequencyEnum;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Repositories\AccountRepository;
use App\Repositories\TransactionRepository;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $account_repository = new AccountRepository();
        $transaction_repository = new TransactionRepository();

        $accounts = $account_repository->getAccounts();
        $categories = Category::orderBy('name')
            ->get();
        $categories_mapped = $categories->map(function ($data) {
            return [
                'id' => $data->id,
                'name' => ucwords($data->name),
                'type' => $data->type,
            ];
        });

        return Inertia::render('App/Home', [
            'totalBalance' => $accounts['sum_balance'],
            'accounts' => $accounts['accounts'],
            'categories' => $categories_mapped,
            'transactions' => $transaction_repository->getTransactions(5),
            'frequencies' => FrequencyEnum::optionToIndonesia(),
        ]);
    }
}
