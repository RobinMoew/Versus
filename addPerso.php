<?php

require "co.php";

$url = $_POST['url'];
$id = $_POST['id'];
$nom = $_POST['nom'];
$pv = $_POST['pv'];
$pa = $_POST['pa'];

if (!$url || !$id || !$nom || !$pv || !$pa) {
    echo "Il manque des informations";
    exit();
}

$req = $co -> prepare("INSERT INTO versus(id, nom, pv, pa, url) VALUES(?,?,?,?,?)");
$req -> bind_param("sssss",$id, $nom, $pv, $pa, $url);
$req -> execute();







?>