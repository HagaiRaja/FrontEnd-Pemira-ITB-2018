<?php
    $namalengkap = $_POST["name"];
    $nim = $_POST["nim"];
    $kandidat = $_POST["role"];
    $image = $_POST["image"];

    include 'include/dbh.inc.php';

    if ($kandidat == "1") {
        $calon = "KM";
    }
    else {
        $calon = "MWA";
    }
    $tabel = "calon";
    $sql = "INSERT INTO " . $tabel . " (nim, nama, dari, image) VALUES ('" .
            $nim . "','" .
            $namalengkap."','" .
            $calon ."','" .
            $image . "')";

    echo ($sql);
    $result = $conn->query($sql);

    if ($result) {
        $resp->success = true;
    }
    else {
        $resp->success = false;
        $resp->error_message = $conn->error;
    }



    echo json_encode($resp);
?>