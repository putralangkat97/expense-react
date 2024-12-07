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
        $data = $this->filter();
        // dd($data);
        return Inertia::render('App/Report', [
            'data' => $data,
        ]);
    }

    private function filter()
    {
        $current_date = now();
        $label_chart = [];
        $total_amount = [];

        $month_export = Carbon::now()->month;
        $year_export = Carbon::now()->year;

        $start_of_week = Carbon::parse($current_date)->copy()->startOfWeek(Carbon::MONDAY);
        $end_of_weekdays = Carbon::parse($current_date)->copy()->endOfWeek(Carbon::SUNDAY);

        $days = CarbonPeriod::create($start_of_week, $end_of_weekdays);
        $labels = [];

        // Create an array to hold total amounts for expenses and income
        $totalAmounts = [
            'expense' => [],
            'income' => [],
        ];

        foreach ($days as $day) {
            $labels[] = $day->format('d');
        }

        // Fetch transactions for both types in a single query
        $transactions = Transaction::selectRaw('DATE(transaction_date) as date, SUM(CASE WHEN type = "0" THEN amount ELSE 0 END) as total_expense, SUM(CASE WHEN type = "1" THEN amount ELSE 0 END) as total_income')
            ->whereBetween('transaction_date', [$start_of_week, $end_of_weekdays])
            ->where('user_id', Auth::user()->id)
            ->groupBy('date')
            ->get();

        // Initialize the totals for each day
        foreach ($labels as $day) {
            $formatted_day = $start_of_week->format('Y-m') . "-$day"; // Use current year and month
            $transaction = collect($transactions)->firstWhere('date', $formatted_day);

            $totalAmounts['expense'][] = $transaction ? $transaction['total_expense'] : 0;
            $totalAmounts['income'][] = $transaction ? $transaction['total_income'] : 0;
        }
        $label_chart = $labels;
        $month = $start_of_week->format('F');

        return [
            'labels' => $label_chart,
            "dataExpense" => $totalAmounts['expense'],
            "dataIncome" => $totalAmounts['income'],
            "monthName" => $month,
        ];
    }
}
