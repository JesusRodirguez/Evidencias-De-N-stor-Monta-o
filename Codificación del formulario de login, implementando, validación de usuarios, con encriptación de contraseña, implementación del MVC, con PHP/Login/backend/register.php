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

$errors = [];

// VALIDACIONES
if ($name === '' || !preg_match('/^[\p{L}\s]+$/u', $name)) {
    $errors[] = "Nombre inválido.";
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Email inválido.";
}

if (strlen($password) < 6) {
    $errors[] = "La contraseña debe tener mínimo 6 caracteres.";
}

if ($password !== $password_confirm) {
    $errors[] = "Las contraseñas no coinciden.";
}

// SI HAY ERRORES → VOLVER AL REGISTRO
if (!empty($errors)) {
    $mensaje = urlencode(implode(" | ", $errors));
    header("Location: ../public/register.html?error=$mensaje");
    exit;
}

// VALIDAR SI EL EMAIL YA EXISTE
$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$email]);

if ($stmt->fetch()) {
    $mensaje = urlencode("El email ya está registrado.");
    header("Location: ../public/register.html?error=$mensaje");
    exit;
}

// INSERTAR USUARIO
$hash = password_hash($password, PASSWORD_DEFAULT);

$stmt = $pdo->prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)");
$stmt->execute([$name, $email, $hash]);

// ÉXITO → IR AL LOGIN
header("Location: ../public/login.html?success=Registro+exitoso+ahora+puedes+iniciar+sesión");
exit;
