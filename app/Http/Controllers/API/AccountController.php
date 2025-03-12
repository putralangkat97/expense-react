<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\AccountRequest;
use App\Models\Account;
use App\Repositories\AccountRepository;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    use ApiResponse;

    public function __construct(protected AccountRepository $accountRepository) {}

    public function index()
    {
        $accounts = Account::where('user_id', Auth::user()->id)
            ->get();

        return $this->success(
            message: 'Account List',
            data: $accounts ?? [],
            status_code: 200,
        );
    }

    public function store(AccountRequest $request)
    {
        $account_create = $this->accountRepository->createAccount($request);
        if ($account_create['type'] === 'success') {
            return $this->success(
                message: $account_create['message'],
                data: $account_create['data'],
                status_code: 201,
            );
        }
    }

    public function show(string|int $account_id)
    {
        return $this->success(
            message: 'Account found.',
            data: Account::where('user_id', Auth::user()->id)
                ->where('id', $account_id)
                ->first(),
            status_code: 200,
        );
    }

    public function update(AccountRequest $request, string|int $account_id)
    {
        $account_update = $this->accountRepository->updateAccount($request, $account_id);
        if ($account_update['type'] === 'success') {
            return $this->success(
                message: $account_update['message'],
                data: $account_update['data'],
                status_code: 201,
            );
        }
    }

    public function delete(string|int $account_id)
    {
        $account = $this->accountRepository->deleteAccount($account_id);
        return $this->success(
            message: $account['message'],
            status_code: 200,
        );
    }
}
