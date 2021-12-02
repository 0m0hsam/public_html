<?php 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body{
            margin-top: 30px;
            color: white;
        }

        body a{
            font-size: large;
            display: inline;
            padding: 7px 15px;
            width: 50px;
            border-radius: 5px;
            background: white;
            color: rgb(173, 88, 88);
            text-decoration: none;
        }
    </style>
</head>
<body>
<?php
if(isset($_GET["purchase"]) && !empty($_GET["purchase"])){
    echo $_SESSION["Firstname"]." you have successfully purchase your goods 
    <a href='assign11.html'>Home Page</a>";
}

if(isset($_GET["cancel"]) && !empty($_GET["cancel"])){
    echo $_SESSION["Firstname"]." you have canceled your goods order kindly always patronize us thanks...
    <a href='assign11.html'>Home Page</a>";
}
?>
</body>
</html>