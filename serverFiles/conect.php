<?php
//Here you should put your db conection
$servername="localhost";
$username="user";
$password="pass";
$table="yourtable";
try{
  $con=new PDO("mysql:host=$servername;dbname=$table",$username,$password);
  $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
  echo "Conection stablished";

  //Table on bd to make it work
  /**
   * USERS   (ID_U, NAME, DATEREGISTRY)
   *               \  
   * PAYMENT (ID_P,ID_U, PAYED(bool))
   */
}
catch(PDOException $e)
{
  echo "Connection Failed". $e;

}
 ?>