<?php
    include_once "conect.php";
    //Geth paid months
    function getCount($con,$id){
        $query=$con->prepare("SELECT * FROM payments WHERE ID_U=:id");
        $query->execute(array('id'=>$id));
        $count=$query->rowCount();
        return $count;
    }

    if(isset($_GET["id"])){
        $id = $_GET["id"];
        echo getCount($con,$id);
    }else{
        echo "Error, no ID received.";
    }
?>