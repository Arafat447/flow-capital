<?php

use App\Http\Controllers\AppointmentMailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('send-email',[AppointmentMailController::class, 'send_mail']);
Route::post('send-otp',[AppointmentMailController::class, 'send_otp']);
Route::post('verify-otp',[AppointmentMailController::class, 'verify_otp']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
