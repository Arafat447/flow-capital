<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>{{$mailData['title']}}</h1>
    <p>Dear {{$mailData['first_name']}} {{$mailData['last_name']}} ,</p>
    <p>Your appointment has been successfully placed on {{$mailData['date']}} at {{$mailData['time']}} {{$mailData['time_zone']}}.</p>

    <p>Thank you for contacting Shelley Global.</p>
    <p>We will see you at your chosen time.</p>
    <p>If you need to reschedule or cancel, please get in touch.</p>
    <p>Kind regards,</p>
    <p>Shelley Global Team</p>
</body>

</html>