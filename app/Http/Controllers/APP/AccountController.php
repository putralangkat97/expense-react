<?php

namespace App\Http\Controllers\APP;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Category;
use App\Models\Transaction;
use App\Repositories\AccountRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function __construct(protected AccountRepository $account_repository) {}

    public function index(string|int $id = null)
    {
        $current_user = Auth::user();
        $transactions = Transaction::with(['category', 'account'])
            ->where('user_id', $current_user->id)
            ->where('account_id', $id)
            ->orderBy('transaction_date', 'desc')
            ->get()->map(function ($transaction) {
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

        $account_list = $this->account_repository->getAccounts();
        if ($id) {
            return Inertia::render('App/Account/ViewAccount', [
                'account' => $this->account_repository->getAccount($id),
                'transactions' => $transactions,
                'accounts' => $account_list['accounts'],
                'categories' => $categories_mapped,
            ]);
        } else {
            return Inertia::render('App/Account', [
                'accounts' => $account_list['accounts'],
            ]);
        }
    }

    public function store(Request $request)
    {
        $account_create = $this->account_repository->createAccount($request);
        session()->flash($account_create['type'], $account_create['message']);
    }

    public function update(Request $request, $account_id)
    {
        $account_create = $this->account_repository->updateAccount($request, $account_id);
        session()->flash($account_create['type'], $account_create['message']);
    }
}
