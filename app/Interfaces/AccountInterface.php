<?php

namespace App\Interfaces;

use App\Models\Account;
use Illuminate\Http\Request;

interface AccountInterface
{
    public function getAccounts(): array;
    public function getAccount(string|int $account_id): Account;
    public function createAccount(Request $request): array;
    public function updateAccount(Request $request, string|int $account_id): array;
}
