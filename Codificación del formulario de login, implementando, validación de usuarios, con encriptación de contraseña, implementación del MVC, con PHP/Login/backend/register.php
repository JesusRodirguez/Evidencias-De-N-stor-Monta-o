<?php
// backend/register.php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../public/register.html');
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';
$password_confirm = $_POST['password_confirm'] ?? '';

// Validaciones servidor
$errors = [];

if ($name === '' || !preg_match('/^[\p{L}\s]+$/u', $name)) {
    $errors[] = "Nombre inválido.";
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Email inválido.";
}
if (strlen($password) < 6) {
    $errors[] = "La contraseña debe tener al menos 6 caracteres.";
}
if ($password !== $password_confirm) {
    $errors[] = "Las contraseñas no coinciden.";
}

if ($errors) {
    // Simple: devolver errores. Mejor usar sesiones/flash en producción.
    echo implode('<br>', $errors);
    exit;
}

// Verificar email único
$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetch()) {
    echo "El email ya está registrado.";
    exit;
}

// Insertar usuario
$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)");
$stmt->execute([$name, $email, $hash]);

echo "Registro exitoso. Ahora inicia sesión.";

