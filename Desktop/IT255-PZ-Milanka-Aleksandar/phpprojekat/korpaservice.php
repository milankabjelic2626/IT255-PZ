<?php
header('Access-Control-Allow-Methods: GET, POST');
include("shared.php");


function getOrder($token)
{
    $idKorisnika = tokenToId($token);

    global $conn;
    $query = 'SELECT narudzbina.id, narudzbina.idProizvoda, 
       proizvod.ime, proizvod.cena, narudzbina.kolicina,
       proizvod.katID, proizvod.opis, proizvod.url,narudzbina.idKorpe,
      (narudzbina.kolicina * proizvod.cena) AS total,
      (SELECT naziv FROM kategorija WHERE kategorija.id = proizvod.katID) AS type
      FROM narudzbina
      JOIN korpa ON narudzbina.idKorpe = korpa.id
      JOIN korisnici ON korpa.idKorisnika = korisnici.id
      JOIN proizvod ON narudzbina.idProizvoda = proizvod.id
      WHERE korpa.flag = 1 AND korpa.idKorisnika = ?';
    $korpa = array();
    if ($statement = $conn->prepare($query)) {
        $statement->bind_param('i', $idKorisnika);
        $statement->execute();
        $result = $statement->get_result();
        while ($row = $result->fetch_assoc()) {
            $order = array();
            $order['id'] = $row['id'];
            $order['idProizvoda'] = $row['idProizvoda'];
            $order['ime'] = $row['ime'];
            $order['type'] = $row['type'];
            $order['cena'] = $row['cena'];
            $order['kolicina'] = $row['kolicina'];
            $order['katID'] = $row['katID'];
            $order['opis'] = $row['opis'];
            $order['url'] = $row['url'];
            $order['idKorpe'] = $row['idKorpe'];
            $order['total'] = $row['total'];
            array_push($korpa, $order);
        }
    }
    $message['korpa'] = $korpa;
    return json_encode($korpa);
}

function removeOrder($token, $idProizvoda)
{
    $idKorisnika = tokenToId($token);
    global $conn;
    $message = array();
    $query = 'DELETE narudzbina
      FROM narudzbina
      JOIN proizvod ON narudzbina.idProizvoda = proizvod.id
      JOIN korpa ON narudzbina.idKorpe = korpa.id
      WHERE narudzbina.idProizvoda = ? AND korpa.idKorisnika = ?';
    $statement = $conn->prepare($query);
    $statement->bind_param("ii", $idProizvoda, $idKorisnika);
    $statement->execute();
    if ($statement->execute()) {
        $message['success'] = "OK";
    } else {
        $message['error'] = "Error!";
    }
    return json_encode($message);
}

function addOrder($token, $idProizvoda, $kolicina)
{
    $cart_id = tokenToCart($token);
    global $conn;
    $message = array();
    $query = 'INSERT INTO narudzbina (idKorpe, idProizvoda, kolicina) VALUES  (?, ?, ?)';
    $statement = $conn->prepare($query);
    $statement->bind_param("iii", $cart_id, $idProizvoda, $kolicina);
    if ($statement->execute()) {
        $message['success'] = "OK";
    } else {
        $message['error'] = "Error!";
    }
    return json_encode($message);
}

function updateOrder($token, $idProizvoda, $kolicina)
{
    $idKorisnika = tokenToId($token);
    global $conn;
    $message = array();
    $query = 'UPDATE narudzbina
      JOIN korpa	
      ON narudzbina.idKorpe = korpa.id
      JOIN korisnici 
      ON korpa.idKorisnika = korisnici.id
      SET narudzbina.kolicina = ?
      WHERE narudzbina.idProizvoda = ?
      AND korisnici.id = ?';
    $statement = $conn->prepare($query);
    $statement->bind_param("iii", $kolicina, $idProizvoda, $idKorisnika);
    if ($statement->execute()) {
        $message['success'] = "OK";
    } else {
        $message['error'] = "Error!";
    }
    if (!checkIfCartExists($token)) {
        createCart($token);
    }
    return json_encode($message);
}

function checkout($token)
{
    $token = str_replace('"', "", $token);
//    sendMail($token);
    $idKorisnika = tokenToId($token);
    global $conn;
    $message = array();
    $query = 'UPDATE korpa 
              SET flag = 2
              WHERE korpa.flag = 1 AND korpa.idKorisnika = ?';
    $statement = $conn->prepare($query);
    $statement->bind_param("i", $idKorisnika);
    if ($statement->execute()) {
        $message['success'] = "OK";
    } else {
        $message['error'] = "Error!";
    }
    if (!checkIfCartExists($token)) {
        createCart($token);
    }
    return json_encode($message);
}


?>