<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
   
    <p>Dear {{ $mailData['first_name'] }} {{ $mailData['last_name'] }},</p> <br>
    <p>Thank you for registering with our platform. To complete the verification process, please enter the following code in the designated field:</p>
    <p>Verification Code: <b> {{ $mailData['otp'] }} </b></p> 
    <p>If you did not initiate this verification process, kindly disregard this email.</p> 
    <p>Thank you for choosing our services.</p>  
    <p>Kind regards,</p>
    <p>Shelley Global Team</p>
    
</body>

</html>