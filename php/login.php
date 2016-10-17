<?php
/**
 * Created by PhpStorm.
 * User: lc
 * Date: 2016/10/14
 * Time: 15:10
 */
include "DataBaseTool.php";
$dbUtil = new MyDB();
$dbUtil->openDB();


$name = $_POST["userName"];
$password = $_POST["passWord"];
echo $name;
echo $password;
$dbUtil->closeDB();

?>