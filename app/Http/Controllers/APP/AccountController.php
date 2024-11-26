<?php

namespace App\Http\Controllers\APP;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Number;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index()
    {
        $current_user = Auth::user();
        $accounts = Account::where('user_id', $current_user->id)
            ->get()->map(function ($data) {
                return [
                    'id' => $data->id,
                    'name' => $data->name,
                    'balance' => $data->balance,
                    'colour' => $data->colour,
                ];
            });

        return Inertia::render('App/Account', [
            'accounts' => $accounts,
        ]);
    }
}
