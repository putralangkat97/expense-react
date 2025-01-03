<?php

namespace App\Http\Controllers;

use App\Actions\TransactionAction;

class ArtisanController extends Controller
{
    public function handle()
    {
        $recurring_transaction = new TransactionAction();
        $recurring_transaction->recurringTransactionAction();

        return response()->json(['message' => 'OK'], 200);
    }
}
