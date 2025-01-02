<?php

namespace App\Repositories;

use App\Interfaces\AccountInterface;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AccountRepository implements AccountInterface
{
    private function getCurrentUser()
    {
        return Auth::user()->id;
    }

    private function validateForm(Request $request): array
    {
        return $request->validate([
            'name' => 'required',
            'balance' => 'required',
        ]);
    }

    public function getAccounts(): array
    {
        $accounts = Account::where('user_id', $this->getCurrentUser());
        $sum_balance = $accounts->sum('balance');
        $account_mapped = $accounts->orderBy('updated_at', 'desc')
            ->get()
            ->map(function ($data) {
                return [
                    'id' => $data->id,
                    'name' => $data->name,
                    'balance' => $data->balance,
                    'colour' => $data->colour,
                ];
            });

        return [
            'accounts' => $account_mapped,
            'sum_balance' => $sum_balance,
        ];
    }

    public function getAccount(string|int $account_id): Account
    {
        return Account::where('user_id', $this->getCurrentUser())
            ->where('id', $account_id)->first();
    }

    public function createAccount(Request $request): array
    {
        $validated = $this->validateForm($request);
        if ($validated) {
            DB::beginTransaction();
            try {
                $account = new Account();
                $account->name = $validated['name'];
                $account->balance = $validated['balance'];
                $account->user_id = $this->getCurrentUser();
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
        }

        return [
            'message' => $message,
            'type' => $type,
        ];
    }

    public function updateAccount(Request $request, string|int $account_id): array
    {
        $validated = $this->validateForm($request);
        if ($validated) {
            DB::beginTransaction();
            try {
                $account = Account::findOrFail($account_id);
                $account->name = $validated['name'];
                $account->balance = $validated['balance'];
                $account->user_id = $this->getCurrentUser();
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
        }

        return [
            'message' => $message,
            'type' => $type,
        ];
    }
}
