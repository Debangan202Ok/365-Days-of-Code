<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backend</title>
</head>

<body>
    <center>
        <h1>Data Submitted</h1>
        <hr />
        <div>
            <p>User Registration Sucessfully Done. Goto <b><a href="http://localhost:1234/login.php">Login</a></b></p>
        </div>
    </center>
    <?
    $name = $_POST["name"];
    $num = $_POST["ph_no"];
    $pass = $_POST["pass"];
    $gen = $_POST["gen"];
    $has = password_hash($pass, null);
    echo "<p>your name is $name & phone no. is $num</p>";
    echo "<p>your age is $gen</p>";
    echo "<p>your password is $has</p>";
    
    ?>
</body>

</html>