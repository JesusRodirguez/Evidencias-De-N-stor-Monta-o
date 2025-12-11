<?php

session_start();
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../public/index.html');
    exit;
}

$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '') {
    echo "Credenciales inválidas.";
    exit;
}

$stmt = $pdo->prepare("SELECT id, name, password_hash FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    echo "Email o contraseña incorrectos.";
    exit;
}

// Login exitoso
$_SESSION['user_id'] = $user['id'];
$_SESSION['user_name'] = $user['name'];

echo "OK";

