<?php
//Here you should put your db conection
$servername="localhost";
$username="user";
$password="pass";
$dbname="yourdb";
try{
  $con=new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
  $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
  echo "Conection stablished";
}
catch(PDOException $e)
{
  echo "Connection Failed". $e;
}
 ?>