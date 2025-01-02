<?php

namespace App\Http\Controllers\APP;

use App\Actions\AccountAction;
use App\Enums\FrequencyEnum;
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
    public function index(string|int $id = null)
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

        $transactions = Transaction::with(['category', 'account'])
            ->where('user_id', $current_user->id);

        if ($id) {
            $transactions = $transactions->where('id', $id);
        }

        $transactions = $transactions->orderBy('transaction_date', 'desc')
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
                    'is_recurring' => $transaction->is_recurring,
                    'frequency_id' => FrequencyEnum::setToIndonesia($transaction->frequency),
                    'frequency' => $transaction->frequency,
                    'next_due_date' => date('d/m/Y', strtotime($transaction->next_due_date)),
                    'note' => $transaction->note,
                ];
            });

        if ($id) {
            return Inertia::render('App/Transaction/ViewTransaction', [
                'transactions' => $transactions[0],
                'categories' => $categories_mapped,
                'accounts' => $account_mapped,
                'frequencies' => FrequencyEnum::optionToIndonesia(),
            ]);
        }
        return Inertia::render('App/Transaction', [
            'transactions' => $transactions,
            'categories' => $categories_mapped,
            'accounts' => $account_mapped,
            'frequencies' => FrequencyEnum::optionToIndonesia(),
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
            'is_recurring' => 'nullable',
            'frequency' => 'required_if:is_recurring,true',
            'next_due_date' => 'required_if:is_recurring,true',
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
                    $transaction_date_format = Carbon::parse($date, 'UTC')
                        ->timezone(config('app.timezone_name'))
                        ->toDateTimeString();
                    if ($validated['is_recurring']) {
                        $next_due_date_format = Carbon::parse($validated['next_due_date'], 'UTC')
                            ->timezone(config('app.timezone_name'))
                            ->toDateTimeString();
                    }
                    $message = 'created';
                    $transaction->name = $validated['name'];
                    $transaction->type = $validated['transactionType'] == 'in' ?? 0;
                    $transaction->transaction_date = $transaction_date_format;
                    $transaction->category_id = $validated['categoryId'];
                    $transaction->user_id = Auth::user()->id;
                    $transaction->account_id = $validated['accountId'];
                    $transaction->amount = $validated['amount'];
                    $transaction->note = $validated['note'];
                    $transaction->is_recurring = $validated['is_recurring'] ?? false;
                    $transaction->frequency = $validated['is_recurring'] ? $validated['frequency'] : null;
                    $transaction->next_due_date = $validated['is_recurring'] ? $next_due_date_format : null;
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
            'is_recurring' => 'nullable',
            'frequency' => 'required_if:is_recurring,true',
            'next_due_date' => 'required_if:is_recurring,true',
        ]);

        if ($validated) {
            DB::beginTransaction();
            try {
                $transaction = Transaction::findOrFail($id);
                $action = new AccountAction();
                if (!$action->accountHelper($validated, $transaction, $id)) {
                    DB::rollBack();
                } else {
                    $date = $validated['transactionDate'] . '00:00:00';
                    $transaction_date_format = Carbon::parse($date, 'UTC')
                        ->timezone(config('app.timezone_name'))
                        ->toDateTimeString();
                    if ($validated['is_recurring']) {
                        $next_due_date_format = Carbon::parse($validated['next_due_date'], 'UTC')
                            ->timezone(config('app.timezone_name'))
                            ->toDateTimeString();
                    }
                    $message = 'updated';
                    $transaction->name = $validated['name'];
                    $transaction->type = $validated['transactionType'] == 'in' ?? 0;
                    $transaction->transaction_date = $transaction_date_format;
                    $transaction->category_id = $validated['categoryId'];
                    $transaction->user_id = Auth::user()->id;
                    $transaction->account_id = $validated['accountId'];
                    $transaction->amount = $validated['amount'];
                    $transaction->note = $validated['note'];
                    $transaction->is_recurring = $validated['is_recurring'] ?? false;
                    $transaction->frequency = $validated['is_recurring'] ? $validated['frequency'] : null;
                    $transaction->next_due_date = $validated['is_recurring'] ? $next_due_date_format : null;
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
