<?php
include_once "conect.php";
//Add user to payments
function addUser($con,$user,$date){
    $add= $con->prepare("INSERT INTO users(Name,Date_Inscription) VALUES(:user,:today)"); 
    return $add->execute(array('user'=>$user,'today'=>$date));;
}

if(isset($_POST['user']) && isset($_POST['date'])){
    $user=$_POST['user'];
    $date=$_POST['date'];
    echo addUser($con,$user,$date);
}else{
    echo "Error no User or Date received";
}
?>