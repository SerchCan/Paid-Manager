<?php
    include_once "conect.php";
    //Obtain users ID and name
    function getUsers($conection){
        $query = $conection->prepare("SELECT ID_U,Name FROM users");
        $query->execute();
        $users=$query->fetchAll(PDO::FETCH_ASSOC);
        return json_encode($users);
    }
    echo getUsers($con);
?>