<?php

namespace App\Actions;

use App\Models\Account;
use Illuminate\Support\Facades\DB;

class AccountAction
{
    public function accountHelper(array $data, object|array|null $transaction = null, $transaction_id = null, bool $cron = false): bool
    {
        DB::beginTransaction();
        try {
            $account = Account::find($cron ? $data['account_id'] : $data['accountId']);
            $amount = $transaction->amount != $data['amount'] ? $transaction->amount : $data['amount'];

            if ($transaction_id) {
                $balance = $transaction->amount - $data['amount'];
                $old_account = Account::find($transaction->account_id);

                // If the account has changed, update both the old and new accounts
                if ($account->id != $transaction->account_id) {
                    if ($data['transactionType'] == 'in') {
                        $old_account->decrement('balance', $amount);
                        $account->increment('balance', $data['amount']);
                    } else {
                        $old_account->increment('balance', $amount);
                        $account->decrement('balance', $data['amount']);
                    }
                } else {
                    // Update the same account's balance
                    if ($data['transactionType'] == 'in') {
                        $account->update(['balance' => $account->balance - $balance]);
                    } else {
                        $account->update(['balance' => $account->balance + $balance]);
                    }
                }
            } else {
                // For new transactions
                if (($cron ? $data['type'] : $data['transactionType']) == 'in') {
                    $account->increment('balance', $data['amount']);
                } else {
                    $account->decrement('balance', $data['amount']);
                }
            }
            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            info($e->getMessage());

            return false;
        }
    }
}
