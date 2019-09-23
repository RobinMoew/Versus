<?php
include_once("co.php");

$idVersus = $_POST['idVersus'];
$idSelf = $_POST['idSelf'];
$bdd_id = null;
$bdd_nom = null;
$bdd_pv = null;
$bdd_pa = null;
$bdd_img = null;

$sql = $co->prepare("SELECT * FROM versus WHERE id=? OR ?");
$sql->bind_param('ii',$idVersus,$idSelf);
$sql->execute();
$sql->bind_result($bdd_id, $bdd_nom, $bdd_pv, $bdd_pa, $bdd_img);
$result = $sql->get_result();
$output = $result->fecth_all(MYSQLI_ASSOC);
$sql->close();
$co->close();
echo json_encode($output);

?>