<?php

session_start();
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../public/login.html');
    exit;
}

$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '') {
    $msg = urlencode("Credenciales inválidas");
    header("Location: ../public/login.html?error=$msg");
    exit;
}

$stmt = $pdo->prepare("SELECT id, name, password_hash FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    $msg = urlencode("Email o contraseña incorrectos");
    header("Location: ../public/login.html?error=$msg");
    exit;
}

// Login exitoso
$_SESSION['user_id'] = $user['id'];
$_SESSION['user_name'] = $user['name'];

// REDIRECCIONAR A DASHBOARD
header('Location: ../public/dashboard.html');
exit;
