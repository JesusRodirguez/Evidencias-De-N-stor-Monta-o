<?php
// backend/getUsers.php
require_once "config.php";

// Obtener todos los usuarios
try {
    $stmt = $pdo->query("SELECT id, name, email FROM users ORDER BY id DESC");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Devolver en formato JSON
    header('Content-Type: application/json');
    echo json_encode($users);
} catch (Exception $e) {
    echo json_encode(["error" => "Error al obtener usuarios: " . $e->getMessage()]);
}
