<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/signup', [JwtAuthController::class, 'register']);
    Route::post('/signin', [JwtAuthController::class, 'login']);
    //Route::get('/user', [JwtAuthController::class, 'user']);
    //Route::post('/token-refresh', [JwtAuthController::class, 'refresh']);
    Route::post('/signout', [JwtAuthController::class, 'signout']);

    //Route::post('/req-password-reset', [ResetPwdReqController::class, 'reqForgotPassword']);
    //Route::post('/update-password', [UpdatePwdController::class, 'updatePassword']);
});

Route::get('/investers', 'InvesterController@index');
Route::get('/investers/{id}', 'InvesterController@invester');
Route::post('/investers', 'InvesterController@store');
Route::delete('/investers/{id}', 'InvesterController@delete');

Route::get('/briefcases', 'BriefcaseController@index');
Route::get('/briefcases/{id}', 'BriefcaseController@briefcase');
Route::post('/briefcases', 'BriefcaseController@store');
Route::delete('/briefcases/{id}', 'BriefcaseController@delete');

Route::get('/transactions', 'TransactionController@index');
Route::get('/transactions/{id}', 'TransactionController@transaction');
Route::post('/transactions', 'TransactionController@store');
Route::delete('/transactions/{id}', 'TransactionController@delete');
