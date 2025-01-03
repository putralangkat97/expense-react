<?php

namespace App\Actions;

use App\Models\Transaction;
use Carbon\Carbon;

class TransactionAction
{
    public function recurringTransactionAction()
    {
        $recurring_transactions = Transaction::where('is_recurring', true)
            ->where('next_due_date', Carbon::now()->toDateString())
            ->get();
        foreach ($recurring_transactions as $rec_trx) {
            $date = $rec_trx->next_due_date;
            $transaction_date_format = Carbon::parse($date, 'UTC')
                ->timezone(config('app.timezone_name'))
                ->toDateTimeString();
            $next_due_date_format = $this->setRecurringDuration($rec_trx->frequency, $rec_trx->next_due_date) . ' 00:00:00';
            $transaction = new Transaction();
            $transaction->name = $rec_trx->name;
            $transaction->type = $rec_trx->type;
            $transaction->transaction_date = $transaction_date_format;
            $transaction->category_id = $rec_trx->category_id;
            $transaction->user_id = $rec_trx->user_id;
            $transaction->account_id = $rec_trx->account_id;
            $transaction->amount = $rec_trx->amount;
            $transaction->note = $rec_trx->note;
            $transaction->is_recurring = $rec_trx->is_recurring;
            $transaction->frequency = $rec_trx->frequency;
            $transaction->next_due_date = $next_due_date_format;
            if ($transaction->save()) {
                $action = new AccountAction();
                $action->accountHelper($transaction->toArray(), $transaction, cron: true);
            }
        }
    }

    private function setRecurringDuration(string $frequency, string|Carbon $date)
    {
        $next_date = "";
        switch ($frequency) {
            case 'daily':
                $next_date = Carbon::parse($date, 'UTC')
                    ->timezone(config('app.timezone_name'))
                    ->addDay()
                    ->toDateString();
                break;
            case 'weekly':
                $next_date = Carbon::parse($date, 'UTC')
                    ->timezone(config('app.timezone_name'))
                    ->addDays(7)
                    ->toDateString();
                break;
            case 'monthly':
                $next_date = Carbon::parse($date, 'UTC')
                    ->timezone(config('app.timezone_name'))
                    ->addMonth()
                    ->toDateString();
                break;
            case 'yearly':
                $next_date = Carbon::parse($date, 'UTC')
                    ->timezone(config('app.timezone_name'))
                    ->addYear()
                    ->toDateString();
                break;
            default:
                throw new \InvalidArgumentException("Invalid frequency: {$frequency}");
        }

        return $next_date;
    }
}
