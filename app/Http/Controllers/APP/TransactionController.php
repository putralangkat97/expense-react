<?php

namespace App\Http\Controllers\APP;

use App\Actions\AccountAction;
use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Category;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        $current_user = Auth::user();

        $categories = Category::orderBy('name')
            ->get();
        $categories_mapped = $categories->map(function ($data) {
            return [
                'id' => $data->id,
                'name' => ucwords($data->name),
                'type' => $data->type,
            ];
        });

        $accounts = Account::where('user_id', $current_user->id);
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

        return Inertia::render('App/Transaction', [
            'transactions' => $transactions,
            'categories' => $categories_mapped,
            'accounts' => $account_mapped,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:2|max:100',
            'transactionDate' => 'required',
            'categoryId' => 'required',
            'accountId' => 'required',
            'amount' => 'required|numeric',
            'note' => 'nullable',
            'transactionType' => 'required',
        ]);

        if ($validated) {
            DB::beginTransaction();
            try {
                $transaction = new Transaction();
                $action = new AccountAction();
                if (!$action->accountHelper($validated, $transaction)) {
                    DB::rollBack();
                } else {
                    $date = $validated['transactionDate'] . '00:00:00';
                    $format = Carbon::parse($date, 'UTC')
                        ->timezone(config('app.timezone_name'))
                        ->toDateTimeString();
                    $message = 'created';
                    $transaction->name = $validated['name'];
                    $transaction->type = $validated['transactionType'] == 'in' ?? 0;
                    $transaction->transaction_date = $format;
                    $transaction->category_id = $validated['categoryId'];
                    $transaction->user_id = Auth::user()->id;
                    $transaction->account_id = $validated['accountId'];
                    $transaction->amount = $validated['amount'];
                    $transaction->note = $validated['note'];
                    $transaction->save();
                    $type = 'success';
                    $message = 'Transaction ' . $message . ' successfully';
                    DB::commit();
                }
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
            'name' => 'required|min:2|max:100',
            'transactionDate' => 'required',
            'categoryId' => 'required',
            'accountId' => 'required',
            'amount' => 'required|numeric',
            'note' => 'nullable',
            'transactionType' => 'required',
        ]);

        if ($validated) {
            DB::beginTransaction();
            try {
                $transaction = Transaction::findOrFail($id);
                $action = new AccountAction();
                if (!$action->accountHelper($validated, $transaction, $id)) {
                    DB::rollBack();
                } else {
                    $date = $validated['transactionDate'] . '' . now()->toTimeString();
                    $format = Carbon::parse($date, 'UTC')
                        ->timezone(config('app.timezone_name'))
                        ->toDateTimeString();
                    $message = 'updated';
                    $transaction->name = $validated['name'];
                    $transaction->type = $validated['transactionType'] == 'in' ?? 0;
                    $transaction->transaction_date = $format;
                    $transaction->category_id = $validated['categoryId'];
                    $transaction->user_id = Auth::user()->id;
                    $transaction->account_id = $validated['accountId'];
                    $transaction->amount = $validated['amount'];
                    $transaction->note = $validated['note'];
                    $transaction->save();
                    $type = 'success';
                    $message = 'Transaction ' . $message . ' successfully';
                    DB::commit();
                }
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
