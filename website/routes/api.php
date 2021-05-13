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
    Route::any('login', [ 'as' => 'login', 'uses' => 'AuthController@login']);
    Route::any('register', 'AuthController@register');
    Route::any('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('user-profile', 'AuthController@userProfile');
});
Route::middleware(['auth'])->group(function () {
    Route::get('/states', 'TypesController@states');
    Route::get('/requestTypes', 'TypesController@requestTypes');

    Route::get('/investers', 'UserController@index');
    Route::get('/investers/{id}', 'UserController@user');
    Route::post('/investers', 'UserController@store');
    Route::delete('/investers/{id}', 'UserController@delete');

    Route::get('/briefcases', 'BriefcaseController@index');
    Route::get('/briefcases/{id}', 'BriefcaseController@briefcase');
    Route::post('/briefcases', 'BriefcaseController@store');
    Route::delete('/briefcases/{id}', 'BriefcaseController@delete');

    Route::get('/transactions', 'TransactionController@index');
    Route::get('/transactions/{id}', 'TransactionController@transaction');
    Route::post('/transactions', 'TransactionController@store');
    Route::delete('/transactions/{id}', 'TransactionController@delete');

});
