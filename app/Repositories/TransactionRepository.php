<?php

namespace App\Repositories;

use App\Actions\AccountAction;
use App\Enums\FrequencyEnum;
use App\Http\Requests\API\TransactionRequest;
use App\Interfaces\TransactionInterface;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransactionRepository implements TransactionInterface
{
    private function getCurrentUser()
    {
        return Auth::user()->id;
    }

    private function validateForm(TransactionRequest $request): array
    {
        return $request->validated();
    }

    public function getTransactions($limit): Collection
    {
        $transactions = Transaction::with(['category', 'account'])
            ->where('user_id', $this->getCurrentUser())
            ->orderBy('id', 'desc')
            ->take($limit ?? 5)
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
                'is_recurring' => $transaction->is_recurring ?? false,
                'frequency_id' => $transaction->is_recurring ? FrequencyEnum::setToIndonesia($transaction->frequency) : null,
                'frequency' => $transaction->is_recurring ? $transaction->frequency : null,
                'next_due_date' => $transaction->is_recurring ? date('d/m/Y', strtotime($transaction->next_due_date)) : null,
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
                'is_recurring' => $transaction->is_recurring ?? false,
                'frequency_id' => $transaction->is_recurring ? FrequencyEnum::setToIndonesia($transaction->frequency) : null,
                'frequency' => $transaction->is_recurring ? $transaction->frequency : null,
                'next_due_date' => $transaction->is_recurring ? date('d/m/Y', strtotime($transaction->next_due_date)) : null,
                'note' => $transaction->note,
            ];
        });

        return $transaction;
    }

    public function createTransaction(TransactionRequest $request): array
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
                    $date = $validated['transactionDate'] . ' 00:00:00';
                    $transaction_date_format = Carbon::parse($date, 'UTC')
                        ->timezone(config('app.timezone_name'))
                        ->toDateTimeString();
                    if (isset($validated['is_recurring']) && $validated['is_recurring']) {
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
                    $transaction->note = isset($validated['note']) ? $validated['note'] : null;
                    $transaction->is_recurring = isset($validated['is_recurring']) && $validated['is_recurring'] ?? false;
                    $transaction->frequency = isset($validated['is_recurring']) ? $validated['frequency'] : null;
                    $transaction->next_due_date = isset($validated['is_recurring']) ? $next_due_date_format : null;
                    $transaction->save();
                    $type = 'success';
                    $message = 'Transaction ' . $message . ' successfully';
                    $data = $transaction;
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
            'data' => $data ?? null,
        ];
    }

    public function updateTransaction(TransactionRequest $request, string|int $transaction_id): array
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
                    $date = $validated['transactionDate'] . ' 00:00:00';
                    $transaction_date_format = Carbon::parse($date, 'UTC')
                        ->timezone(config('app.timezone_name'))
                        ->toDateTimeString();
                    if (isset($validated['is_recurring']) && $validated['is_recurring']) {
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
                    $transaction->note = isset($validated['note']) ? $validated['note'] : null;
                    $transaction->is_recurring = isset($validated['is_recurring']) && $validated['is_recurring'] ?? false;
                    $transaction->frequency = isset($validated['is_recurring']) ? $validated['frequency'] : null;
                    $transaction->next_due_date = isset($validated['is_recurring']) ? $next_due_date_format : null;
                    $transaction->save();
                    DB::commit();
                    $type = 'success';
                    $message = 'Transaction ' . $message . ' successfully';
                    $data = $transaction;
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
            'data' => $data ?? null,
        ];
    }
}
