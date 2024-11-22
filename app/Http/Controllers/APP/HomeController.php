<?php

namespace App\Http\Controllers\APP;

use App\Helpers\LocalDateFormat;
use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Category;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Number;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $current_user = Auth::user();
        $accounts = Account::where('user_id', $current_user->id);
        $transactions = Transaction::with('category')
            ->where('user_id', $current_user->id)
            ->orderBy('id', 'desc')
            ->take(5)
            ->get();

        $transactions = $transactions->map(function ($transaction) {
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

        $sum_balance = $accounts->sum('balance');
        $total_balance = Number::currency(number: $sum_balance, in: 'IDR', locale: 'id');

        $categories = Category::orderBy('name')
            ->get();
        $categories_mapped = $categories->map(function ($data) {
            return [
                'id' => $data->id,
                'name' => ucwords($data->name),
                'type' => $data->type,
            ];
        });

        $account_mapped = $accounts->get()->map(function ($data) {
            return [
                'id' => $data->id,
                'name' => $data->name,
                'balance' => Number::currency(number: $data->balance, in: 'IDR', locale: 'id'),
                'colour' => $data->colour,
            ];
        });

        return Inertia::render('App/Home', [
            'totalBalance' => $total_balance,
            'categories' => $categories_mapped,
            'accounts' => $account_mapped,
            'transactions' => $transactions,
        ]);
    }
}
