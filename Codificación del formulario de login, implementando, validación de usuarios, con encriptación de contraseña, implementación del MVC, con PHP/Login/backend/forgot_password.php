<?php
require_once __DIR__ . '/config.php';

$email = trim($_POST['email'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../public/forgot.html?error=" . urlencode("Email inválido"));
    exit;
}

$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user) {
    header("Location: ../public/forgot.php?error=" . urlencode("El correo no está registrado"));
    exit;
}

// generar token seguro
$token = bin2hex(random_bytes(32));
$expira = date("Y-m-d H:i:s", time() + 3600); // 1 hora

// guardar token (CORREGIDO: reset_expires)
$stmt = $pdo->prepare("UPDATE users SET reset_token=?, reset_expires=? WHERE email=?");
$stmt->execute([$token, $expira, $email]);

// enlace para resetear
$link = "http://localhost/Login/public/reset.php?token=$token";


header("Location: ../public/forgot.php?success=" . urlencode("Enlace enviado: $link"));
exit;
