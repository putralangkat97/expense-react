<?php

namespace App\Http\Controllers\APP;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function index()
    {
        $weekly_report = $this->filter();
        return Inertia::render('App/Report', [
            'weekly_report' => $weekly_report,
        ]);
    }

    private function filter()
    {
        $current_date = now();
        $start_of_week = Carbon::parse($current_date)
            ->copy()
            ->startOfWeek(Carbon::MONDAY);
        $end_of_weekdays = Carbon::parse($current_date)
            ->copy()
            ->endOfWeek(Carbon::SUNDAY);

        // get days in the week
        $days = CarbonPeriod::create($start_of_week, $end_of_weekdays);
        $labels = [];

        $totalAmounts = [
            'expense' => [],
            'income' => [],
        ];

        // create days label
        $day_name = [];
        foreach ($days as $day) {
            $day_name[] = $day->format('Y-m-d');
            $labels[] = $day->format('d');
        }

        // get transactions for the week
        $transactions = Transaction::selectRaw('
            DATE(transaction_date) as date,
            SUM(CASE WHEN type = "0" THEN amount ELSE 0 END) as total_expense,
            SUM(CASE WHEN type = "1" THEN amount ELSE 0 END) as total_income
        ')
            ->whereBetween('transaction_date', [$start_of_week, $end_of_weekdays])
            ->where('user_id', Auth::user()->id)
            ->groupBy('date')
            ->get()
            ->keyBy('date');

        foreach ($day_name as $day) {
            $transaction = $transactions->get($day);

            $totalAmounts['expense'][] = $transaction ? floatval($transaction->total_expense) : 0;
            $totalAmounts['income'][] = $transaction ? floatval($transaction->total_income) : 0;
        }

        return [
            'labels' => $labels,
            'dataExpense' => $totalAmounts['expense'],
            'dataIncome' => $totalAmounts['income'],
            'monthName' => $start_of_week->format('F'),
        ];
    }
}
