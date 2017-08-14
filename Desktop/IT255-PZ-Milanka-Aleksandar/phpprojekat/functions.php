<?php
include("shared.php");


function checkIfLoggedIn()
{
    global $conn;
    if (isset($_SERVER['HTTP_TOKEN'])) {
        $token = $_SERVER['HTTP_TOKEN'];
        $result = $conn->prepare("SELECT * FROM KORISNICI WHERE TOKEN=?");
        $result->bind_param("s", $token);
        $result->execute();
        $result->store_result();
        $num_rows = $result->num_rows;
        if ($num_rows > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function login($email, $lozinka)
{
    global $conn;
    $rarray = array();
    if (checkLogin($email, $lozinka)) {
        $id = sha1(uniqid());
        $result2 = $conn->prepare("UPDATE KORISNICI SET TOKEN=? WHERE EMAIL=?");
        $result2->bind_param("ss", $id, $email);
        $result2->execute();
        $rarray['token'] = $id;
        if (!checkIfCartExists($id)) {
            createCart($id);
        }
    } else {
        header('HTTP/1.1 401 Unauthorized');
        $rarray['error'] = "Invalid username/password";
    }
    return json_encode($rarray);
}

function checkLogin($email, $lozinka)
{
    global $conn;
    $lozinka = md5($lozinka);
    $result = $conn->prepare("SELECT * FROM KORISNICI WHERE EMAIL=? AND LOZINKA=?");
    $result->bind_param("ss", $email, $lozinka);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if ($num_rows > 0) {
        return true;
    } else {
        return false;
    }
}

function checkLoginID($id)
{
    global $conn;
    $result = $conn->prepare("SELECT * FROM KORISNICI WHERE ID=? ");
    $result->bind_param("i", $id);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if ($num_rows > 0) {
        return true;
    } else {
        return false;
    }
}

function register($ime, $prezime, $adresa, $email, $lozinka)
{
    global $conn;
    $rarray = array();
    $errors = "";
    if (checkIfUserExists($email)) {
        $errors .= "Profile with that email already exists\r\n";
    }
    if (strlen($email) < 5) {
        $errors .= "Email must have at least 5 characters\r\n";
    }
    if (strlen($lozinka) < 5) {
        $errors .= "Password must have at least 5 characters\r\n";
    }
    if (strlen($ime) < 3) {
        $errors .= "First name must have at least 3 characters\r\n";
    }
    if (strlen($prezime) < 3) {
        $errors .= "Last name must have at least 3 characters\r\n";
    }
    if ($errors == "") {
        $stmt = $conn->prepare("INSERT INTO KORISNICI (IME, PREZIME, ADRESA, EMAIL, LOZINKA) VALUES (?, ?, ?, ?,?)");
        $sifra = md5($lozinka);
        $stmt->bind_param("sssss", $ime, $prezime, $adresa, $email, $sifra);
        if ($stmt->execute()) {
            $id = sha1(uniqid());
            $result2 = $conn->prepare("UPDATE KORISNICI SET TOKEN=? WHERE EMAIL=?");
            $result2->bind_param("ss", $id, $email);
            $result2->execute();
            $rarray['token'] = $id;
            createCart($id);

        } else {
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = "Database connection error";
        }
    } else {
        header('HTTP/1.1 400 Bad request');
        $rarray['error'] = json_encode($errors);
    }

    return json_encode($rarray);
}

function checkIfUserExists($email)
{
    global $conn;
    $result = $conn->prepare("SELECT * FROM KORISNICI WHERE EMAIL=?");
    $result->bind_param("s", $email);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if ($num_rows > 0) {
        return true;
    } else {
        return false;
    }
}


function getUser($token)
{
    $token = str_replace('"', "", $token);
    $idKorpe = tokenToCart($token);
    global $conn;
    $query = 'SELECT id, ime, prezime, adresa, email, token, role_id,
      (SELECT name FROM role WHERE role.id = korisnici.role_id) AS role_name 
      FROM KORISNICI
      WHERE KORISNICI.token = ?';
    $user = array();
    $statement = $conn->prepare($query);
    $statement->bind_param('i', $token);
    if ($statement->execute()) {
        $result = $statement->get_result();
        while ($row = $result->fetch_assoc()) {
            $user['id'] = $row['id'];
            $user['ime'] = $row['ime'];
            $user['prezime'] = $row['prezime'];
            $user['adresa'] = $row['adresa'];
            $user['email'] = $row['email'];
            $user['role_id'] = $row['role_id'];
            $user['role_name'] = $row['role_name'];

        }
    }
    return json_encode($user);
}


function addProizvod($katID, $ime, $opis, $cena, $url, $akcija)
{
    global $conn;
    $rarray = array();
    $errors = "";
    if (checkIfLoggedIn()) {

        if ($errors == "") {
            $stmt = $conn->prepare("INSERT INTO proizvod (katID, ime, opis, cena, url, akcija ) 
        VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->bind_param('issisi', $katID, $ime, $opis, $cena, $url, $akcija);

            if ($stmt->execute()) {
                $rarray['success'] = "ok";
            } else {
                $rarray['error'] = "Database connection error";
            }
            return json_encode($rarray);
        } else {
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = json_encode($errors);
            return json_encode($rarray);
        }

    } else {
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
        return json_encode($rarray);
    }
}

function removeProduct($id)
{
    global $conn;
    $message = array();
    $query = 'DELETE
      FROM proizvod
      WHERE proizvod.id = ?';
    $statement = $conn->prepare($query);
    $statement->bind_param("i", $id);
    $statement->execute();
    if ($statement->execute()) {
        $message['success'] = "OK";
    } else {
        $message['error'] = "Error!";
    }
    return json_encode($message);
}


function getProizvodi()
{
    global $conn;
    $rarray = array();

    $result = $conn->query("SELECT * FROM PROIZVOD");
    $num_rows = $result->num_rows;
    $proizvodi = array();
    if ($num_rows > 0) {
        $result2 = $conn->query("SELECT * FROM PROIZVOD");
        while ($row = $result2->fetch_assoc()) {
            array_push($proizvodi, $row);
        }
    }
    $rarray['proizvodi'] = $proizvodi;
    return json_encode($rarray);

}


function getProdavnice()
{
    global $conn;
    $rarray = array();

    $result = $conn->query("SELECT * FROM PRODAVNICA");
    $num_rows = $result->num_rows;
    $prodavnice = array();
    if ($num_rows > 0) {
        $result2 = $conn->query("SELECT * FROM PRODAVNICA");
        while ($row = $result2->fetch_assoc()) {
            array_push($prodavnice, $row);
        }
    }
    $rarray['prodavnice'] = $prodavnice;
    return json_encode($rarray);

}


?>