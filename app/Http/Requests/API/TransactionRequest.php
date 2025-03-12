<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

class TransactionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|min:2|max:100',
            'transactionDate' => 'required',
            'categoryId' => 'required',
            'accountId' => 'required',
            'amount' => 'required|numeric',
            'note' => 'nullable',
            'transactionType' => 'required',
            'is_recurring' => 'nullable',
            'frequency' => 'required_if:is_recurring,true',
            'next_due_date' => 'required_if:is_recurring,true',
        ];
    }
}
