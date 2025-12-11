<?php
// backend/deleteUser.php
require_once "config.php";

if (!isset($_GET["id"])) {
    echo "ID faltante";
    exit;
}

$id = intval($_GET["id"]);

try {
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
    $success = $stmt->execute([$id]);

    if ($success) {
        echo "OK";
    } else {
        echo "ERROR";
    }

} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage();
}
