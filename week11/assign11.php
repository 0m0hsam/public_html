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
        .review{
            color: white;
            line-height: 30px;
            font-size: 20px;
            margin:10px 0 0 10px;  
        }

        .review label{
            font-style: bold;
            font-size: 22px;
        }

        .review #btn{
            font-size: large;
            display: inline;
            padding: 7px 15px;
            width: 50px;
            border-radius: 5px;
            background: white;
            color: rgb(173, 88, 88);
        }
    </style>
</head>
<body>
<div class="review">
    <?php
        $firstname = $_POST['firstname'];
        $count = 0;
        foreach ($_POST as $key => $value)
        {
        $count += 1;
            if($count == 4){
                echo "<h4>Product on your cart and quantity selected</h4>";
            } 
                echo "<p><label>$key: </label>$value</p>";
        }
    ?>
    <div>
        <p id="btn">Cancel Order</p>
        <a href="asign11_a.php?link2=$firstname"><p id="btn">Purchase</p></a>
        <?php
            if(isset($_GET['link2'])){
                $_SESSION['link2'] = $firstname;
            }
        ?>
    </div>
</div>

</body>
</html>