<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Mortgage Calculate</title>
</head>
<body style="font-family:Georgia, 'Times New Roman', Times, serif;">
    <header class="php">
        <h2>Payment Dashboard</h2>
        <?php
        $apr = (($_GET["apr"] / 100) / 12);
        $term = ($_GET["term"] * 12);
        $amount = $_GET["amount"];
        $payment = ($amount * $apr * pow((1 + $apr), $term) / pow((1 + $apr), $term)-1);
        // echo "APR: ".$apr;
        print "<b>Monthly Payment: ".$payment."</b><br>";
        print "<b>APR: ".$apr."</b><br>";
        print "<b>Loan Term: ".$term."</b><br>";
        print "<b>Loan Amount: ".$amount."</b><br>";
        ?>
    </header>
</body>
</html>