<?php


header('Access-Control-Allow-Methods: GET, POST');
include("functions.php");

if (isset($_POST['katID']) && isset($_POST['ime']) && isset($_POST['opis']) && isset($_POST['cena']) && isset($_POST['url']) && isset($_POST['akcija'])) {


    $katID = $_POST['katID'];
    $ime = $_POST['ime'];
    $opis = $_POST['opis'];
    $cena = $_POST['cena'];
    $url = $_POST['url'];
    $akcija = $_POST['akcija'];


    echo addProizvod($katID, $ime, $opis, $cena, $url, $akcija);
}


?>