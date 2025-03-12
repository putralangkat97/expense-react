<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [\App\Http\Controllers\API\AuthController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\API\AuthController::class, 'login']);

Route::middleware('auth:sanctum')
    ->group(function () {
        Route::controller(\App\Http\Controllers\API\AuthController::class)
            ->group(function () {
                Route::post('/logout', 'logout');
            });

        Route::controller(\App\Http\Controllers\API\AccountController::class)
            ->group(function () {
                Route::get('/accounts', 'index');
                Route::post('/accounts', 'store');
                Route::get('/accounts/{account_id}', 'show');
                Route::patch('/accounts/{account_id}', 'update');
                Route::delete('/accounts/{account_id}', 'delete');
            });

        Route::controller(\App\Http\Controllers\API\TransactionController::class)
            ->group(function () {
                Route::get('/transactions', 'index');
                Route::post('/transactions', 'store');
                Route::get('/transactions/{account_id}', 'show');
                Route::patch('/transactions/{account_id}', 'update');
                Route::delete('/transactions/{account_id}', 'delete');
            });

        Route::controller(\App\Http\Controllers\API\CategoryController::class)
            ->group(function () {
                Route::get('/categories', 'index');
            });
    });
