<?php

namespace App\Repositories;

use App\Actions\AccountAction;
use App\Enums\FrequencyEnum;
use App\Interfaces\TransactionInterface;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransactionRepository implements TransactionInterface
{
    private function getCurrentUser()
    {
        return Auth::user()->id;
    }

    private function validateForm(Request $request): array
    {
        return $request->validate([
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
    }

    public function getTransactions(): Collection
    {
        $transactions = Transaction::with(['category', 'account'])
            ->where('user_id', $this->getCurrentUser())
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
                'is_recurring' => $transaction->is_recurring,
                'frequency_id' => FrequencyEnum::setToIndonesia($transaction->frequency),
                'frequency' => $transaction->frequency,
                'next_due_date' => date('d/m/Y', strtotime($transaction->next_due_date)),
                'note' => $transaction->note,
            ];
        });

        return $transactions;
    }

    public function getTransaction(string|int $transaction_id): Collection
    {
        $transaction = Transaction::with(['category', 'account'])
            ->where('user_id', $this->getCurrentUser())
            ->where('id', $transaction_id)
            ->orderBy('id', 'desc')
            ->take(5)
            ->get();

        $transaction = $transaction->map(function ($transaction) {
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

        return $transaction;
    }

    public function createTransaction(Request $request)
    {
        $validated = $this->validateForm($request);
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
                    $transaction->user_id = $this->getCurrentUser();
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
        }

        return [
            'message' => $message,
            'type' => $type,
        ];
    }

    public function updateTransaction(Request $request, string|int $transaction_id)
    {
        $validated = $this->validateForm($request);

        if ($validated) {
            DB::beginTransaction();
            try {
                $transaction = Transaction::findOrFail($transaction_id);
                $action = new AccountAction();
                if (!$action->accountHelper($validated, $transaction, $transaction_id)) {
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
                    $transaction->user_id = $this->getCurrentUser();
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
        }

        return [
            'message' => $message,
            'type' => $type,
        ];
    }
}
