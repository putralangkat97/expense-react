<?php

namespace App\Http\Controllers\APP;

use App\Actions\AccountAction;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:2|max:100',
            'transactionDate' => 'required',
            'categoryId' => 'required',
            'accountId' => 'required',
            'amount' => 'required|numeric',
            'note' => 'nullable',
            'transactionType' => 'required',
        ]);

        if ($validated) {
            try {
                $transaction = new Transaction();
                $action = new AccountAction();
                if (!$action->accountHelper($validated, $transaction)) {
                    DB::rollBack();
                } else {
                    $date = $validated['transactionDate'] . '' . now()->toTimeString();
                    $format = Carbon::parse($date, 'UTC')
                        ->timezone(config('app.timezone_name'))
                        ->toDateTimeString();
                    $message = 'created';
                    $transaction->name = $validated['name'];
                    $transaction->type = $validated['transactionType'] == 'in' ?? 0;
                    $transaction->transaction_date = $format;
                    $transaction->category_id = $validated['categoryId'];
                    $transaction->user_id = Auth::user()->id;
                    $transaction->account_id = $validated['accountId'];
                    $transaction->amount = $validated['amount'];
                    $transaction->note = $validated['note'];
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

            session()->flash($type, $message);
        }
    }

    public function update(Request $request, $id)
    {
        sleep(1);
        $validated = $request->validate([
            'name' => 'required|min:2|max:100',
            'transactionDate' => 'required',
            'categoryId' => 'required',
            'accountId' => 'required',
            'amount' => 'required|numeric',
            'note' => 'nullable',
            'transactionType' => 'required',
        ]);

        if ($validated) {
            try {
                $transaction = Transaction::findOrFail($id);
                $action = new AccountAction();
                if (!$action->accountHelper($validated, $transaction, $id)) {
                    DB::rollBack();
                } else {
                    $date = $validated['transactionDate'] . '' . now()->toTimeString();
                    $format = Carbon::parse($date, 'UTC')
                        ->timezone(config('app.timezone_name'))
                        ->toDateTimeString();
                    $message = 'updated';
                    $transaction->name = $validated['name'];
                    $transaction->type = $validated['transactionType'] == 'in' ?? 0;
                    $transaction->transaction_date = $format;
                    $transaction->category_id = $validated['categoryId'];
                    $transaction->user_id = Auth::user()->id;
                    $transaction->account_id = $validated['accountId'];
                    $transaction->amount = $validated['amount'];
                    $transaction->note = $validated['note'];
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

            session()->flash($type, $message);
        }
    }
}
