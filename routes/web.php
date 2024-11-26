<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');

Route::middleware('auth')->group(function () {
    Route::get('/home', \App\Http\Controllers\APP\HomeController::class)
        ->name('home');

    Route::controller(\App\Http\Controllers\APP\AccountController::class)
        ->prefix('/account')
        ->name('account.')
        ->group(function () {
            Route::get('/', 'index')->name('index');
        });

    Route::controller(\App\Http\Controllers\APP\TransactionController::class)
        ->prefix('/transaction')
        ->name('transaction.')
        ->group(function () {
            Route::get('/', 'index')->name('index');
            Route::post('/store', 'store')->name('store');
            Route::patch('/{id}/update', 'update')->name('update');
        });

    Route::controller(\App\Http\Controllers\ProfileController::class)
        ->prefix('/profile')
        ->name('profile.')
        ->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/edit', 'edit')->name('edit');
            Route::patch('/update', 'update')->name('update');
            Route::delete('/destroy', 'destroy')->name('destroy');
        });
});

require __DIR__ . '/auth.php';
