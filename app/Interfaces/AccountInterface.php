<?php

namespace App\Interfaces;

use App\Http\Requests\API\AccountRequest;
use App\Models\Account;
use Illuminate\Http\Request;

interface AccountInterface
{
    public function getAccounts(): array;
    public function getAccount(string|int $account_id): Account;
    public function createAccount(AccountRequest $request): array;
    public function updateAccount(AccountRequest $request, string|int $account_id): array;
    public function deleteAccount(string|int $account_id): array;
}
