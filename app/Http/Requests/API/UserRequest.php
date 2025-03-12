<?php

namespace App\Http\Requests\API;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'name' => ['required'],
            'password' => ['required', 'confirmed'],
        ];

        // if ($this->user()?->id) {
        //     $rules['email'] = Rule::unique(User::class)->ignore($this->user()->id);
        // } else {
        $rules['email'] = ['required', 'email'];
        // }

        return $rules;
    }
}
