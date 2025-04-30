<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->middleware('guest')->name('welcome');

Route::get('/cron', [\App\Http\Controllers\ArtisanController::class, 'handle']);

Route::middleware('auth')->group(function () {
    Route::get('/home', \App\Http\Controllers\APP\HomeController::class)
        ->name('home');

    Route::controller(\App\Http\Controllers\APP\AccountController::class)
        ->prefix('/account')
        ->name('account.')
        ->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/{id}/view', 'index')->name('view');
            Route::post('/store', 'store')->name('store');
            Route::patch('/{id}/update', 'update')->name('update');
        });

    Route::controller(\App\Http\Controllers\APP\TransactionController::class)
        ->prefix('/transaction')
        ->name('transaction.')
        ->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/{id}/view', 'index')->name('view');
            Route::post('/store', 'store')->name('store');
            Route::patch('/{id}/update', 'update')->name('update');
        });

    Route::controller(\App\Http\Controllers\ProfileController::class)
        ->prefix('/profile')
        ->name('profile.')
        ->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/edit/information', 'editInformation')->name('edit-information');
            Route::patch('/edit/information/update', 'update')->name('update');
            Route::get('/edit/password', 'editPassword')->name('edit-password');
            Route::delete('/destroy', 'destroy')->name('destroy');
        });

    Route::controller(\App\Http\Controllers\APP\ReportController::class)
        ->prefix('/report')
        ->name('report.')
        ->group(function () {
            Route::get('/', 'index')->name('index');
        });

    Route::controller(\App\Http\Controllers\APP\SettingController::class)
        ->prefix('/setting')
        ->name('setting.')
        ->group(function () {
            Route::get('/theme', 'theme')->name('theme');
            Route::patch('/theme/update', 'updateTheme')->name('update-theme');
        });
});

require __DIR__ . '/auth.php';
