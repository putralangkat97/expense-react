<?php

namespace App\Http\Controllers\APP;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Category;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Number;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index(string|int $id = null)
    {
        $current_user = Auth::user();
        $accounts = Account::where('user_id', $current_user->id);
        if ($id) {
            $account = $accounts->where('id', $id)->first();
            $account_mapped = $accounts->get()->map(function ($data) {
                return [
                    'id' => $data->id,
                    'name' => $data->name,
                    'balance' => $data->balance,
                    'colour' => $data->colour,
                ];
            });
            $transactions = Transaction::with('category')
                ->where('user_id', $current_user->id)
                ->where('account_id', $id)
                ->orderBy('transaction_date', 'desc')
                ->get()->map(function ($transaction) {
                    return [
                        'id' => $transaction->id,
                        'name' => $transaction->name,
                        'category_name' => ucwords($transaction->category->name),
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

            return Inertia::render('App/Account/ViewAccount', [
                'account' => $account,
                'transactions' => $transactions,
                'accounts' => $account_mapped,
                'categories' => $categories_mapped,
            ]);
        } else {
            $accounts = $accounts->get()->map(function ($data) {
                return [
                    'id' => $data->id,
                    'name' => $data->name,
                    'balance' => $data->balance,
                    'colour' => $data->colour,
                ];
            });

            return Inertia::render('App/Account', [
                'accounts' => $accounts,
            ]);
        }
    }
}
