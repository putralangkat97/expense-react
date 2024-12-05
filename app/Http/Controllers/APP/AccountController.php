<?php

namespace App\Http\Controllers\APP;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Category;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Number;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index(string|int $id = null)
    {
        $current_user = Auth::user();
        $accounts = Account::where('user_id', $current_user->id);
        $account_mapped = $accounts->get()->map(fn($data) => [
            'id' => $data->id,
            'name' => $data->name,
            'balance' => $data->balance,
            'colour' => $data->colour,
        ]);
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

        if ($id) {
            return Inertia::render('App/Account/ViewAccount', [
                'account' => $accounts->where('id', $id)->first(),
                'transactions' => $transactions,
                'accounts' => $account_mapped,
                'categories' => $categories_mapped,
            ]);
        } else {
            return Inertia::render('App/Account', [
                'accounts' => $account_mapped,
            ]);
        }
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'balance' => 'required',
        ]);

        if ($validated) {
            DB::beginTransaction();
            try {
                $account = new Account();
                $account->name = $validated['name'];
                $account->balance = $validated['balance'];
                $account->user_id = Auth::user()->id;
                $account->save();
                $type = 'success';
                $message = 'Account created successfully';
                DB::commit();
            } catch (\Exception $e) {
                $type = 'error';
                $message = 'Internal server error';
                info($e->getMessage());
                DB::rollBack();
            }

            session()->flash($type, $message);
        }
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required',
            'balance' => 'required',
        ]);

        if ($validated) {
            DB::beginTransaction();
            try {
                $account = Account::findOrFail($id);
                $account->name = $validated['name'];
                $account->balance = $validated['balance'];
                $account->user_id = Auth::user()->id;
                $account->save();
                $type = 'success';
                $message = 'Account updated successfully';
                DB::commit();
            } catch (\Exception $e) {
                $type = 'error';
                $message = 'Internal server error';
                info($e->getMessage());
                DB::rollBack();
            }

            session()->flash($type, $message);
        }
    }
}
