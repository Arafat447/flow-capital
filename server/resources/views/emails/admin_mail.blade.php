<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>{{ $mailData['title'] }}</h1>
    <p>An appointemnt request has been successfully placed on {{$mailData['date']}} at {{$mailData['time']}} {{$mailData['time_zone']}}</p>
    <p>First Name: {{$mailData['first_name']}} </p>
    <p>Last Name: {{$mailData['last_name']}} </p>
    <p>Email: {{$mailData['email']}} </p>
    <p>Phone: {{$mailData['phone']}} </p>
    <p>Message: {{$mailData['message']}} </p>
    <p>Requested Service: {{$mailData['selected_service']}} </p>
    <p>Kind regards,</p>
    <p>Shelley Global Team</p>


</body>
</html>