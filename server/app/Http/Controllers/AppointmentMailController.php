<?php

namespace App\Http\Controllers;

use App\Models\Otp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AppointmentMailController extends Controller
{
    public function send_mail(Request $request)
    {
        $details_data = [
            'title' => "Appointment Information",
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
            'date' => $request->date,
            'service' => $request->service,
            'time' => $request->time,
            'time_zone' => $request->time_zone,
            'selected_service' => $request->selected_service,
            'body' => 'This is body of the email'
        ];


        // Send an email notification to the admin
        $cc_emails = ['smart.count.71921@gmail.com', 'shelleyglobaltax@gmail.com', 'talukder.m.alam@gmail.com', 'selinanasrin7@gmail.com', 'selinanasrin7@gmail.com'];
       
        Mail::to($request->email)->send(new \App\Mail\AppointmentMail($details_data));
        Mail::to('info@shelleyglobal.com')->cc($cc_emails)->send(new \App\Mail\AppointmentAdminMail($details_data));
      
        // return view('thank-you');
        return response()->json("Admin Conformation Send Message Email is Sent.");
    }

    public function send_otp(Request $request)
    {
        $verificationCode = rand(1000, 9999);
        $details_data = [
            'title' => "Appointment Information",
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
            'otp' => $verificationCode,
            'body' => 'This is body of the email'
        ];

        $data = new Otp();
        $data->otp = $verificationCode;
        $data->email = $request->email;
        $data->save();

        Mail::to($request->email)->send(new \App\Mail\OtpEmail($details_data));


        return response()->json([
            'otp' => $verificationCode,
            "message" => "OTP Send Successfully.",
        ]);
    }

    public function verify_otp(Request $request)
    {
        $data = Otp::where(['email' => $request->email, 'otp' => $request->otp])->first();
        if ($data) {
            return response()->json([
                "message" => "OTP Verify Successfully.",
            ], 200);
        }
        return response()->json([
            "message" => "OTP Verify Failed.",
        ],400);
    }
}
