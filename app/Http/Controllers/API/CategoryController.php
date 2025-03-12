<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use ApiResponse;

    public function index()
    {
        $type_query = request()->query('type');
        $type = $type_query ?? 'out';
        return $this->success(
            message: 'Categories ' . $type,
            status_code: 200,
            data: Category::where('type', $type)->get(),
        );
    }
}
