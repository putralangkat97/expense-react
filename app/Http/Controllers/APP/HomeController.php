<?php

namespace App\Http\Controllers\APP;

use App\Enums\FrequencyEnum;
use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Category;
use App\Models\Transaction;
use App\Repositories\AccountRepository;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $account_repository = new AccountRepository();
        $accounts = $account_repository->getAccounts();
        $current_user = Auth::user();
        $transactions = Transaction::with(['category', 'account'])
            ->where('user_id', $current_user->id)
            ->orderBy('id', 'desc')
            ->take(5)
            ->get();

        $transactions = $transactions->map(function ($transaction) {
            return [
                'id' => $transaction->id,
                'name' => $transaction->name,
                'category_name' => ucwords($transaction->category->name),
                'account_name' => ucwords($transaction->account->name),
                'transactionDate' => date('d/m/Y', strtotime($transaction->transaction_date)),
                'amount' => $transaction->amount,
                'transactionType' => $transaction->type ? 'in' : 'out',
                'accountId' => $transaction->account_id,
                'categoryId' => $transaction->category_id,
                'note' => $transaction->note,
            ];
        });

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
            'transactions' => $transactions,
            'frequencies' => FrequencyEnum::optionToIndonesia(),
        ]);
    }
}
