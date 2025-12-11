<?php
// backend/reset_password_post.php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../public/index.html');
    exit;
}

$token = $_POST['token'] ?? '';
$password = $_POST['password'] ?? '';
$password_confirm = $_POST['password_confirm'] ?? '';

if ($password === '' || strlen($password) < 6 || $password !== $password_confirm) {
    echo "Error en la contraseña o no coinciden.";
    exit;
}

$stmt = $pdo->prepare("SELECT id, reset_expires FROM users WHERE reset_token = ?");
$stmt->execute([$token]);
$user = $stmt->fetch();

if (!$user) {
    echo "Token inválido.";
    exit;
}

$expires = new DateTime($user['reset_expires']);
$now = new DateTime();
if ($now > $expires) {
    echo "El token ha expirado.";
    exit;
}

// Actualizar contraseña y limpiar token
$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("UPDATE users SET password_hash = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?");
$stmt->execute([$hash, $user['id']]);

echo "Contraseña actualizada. Ahora puedes iniciar sesión.";

