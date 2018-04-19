<?php
include_once "conect.php";
// Insert payment
function paid($con, $id){
    $query=$con->prepare("INSERT INTO payments(ID_U,PAID) values(:id,1)");
    return $query->execute(array("id"=>$id));
}

if (isset($_POST['id'])){
    $id=$_POST['id'];
    echo paid($con,$id);
}
?>