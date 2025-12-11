<?php
// backend/forgot_password.php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../public/forgot.html');
    exit;
}

$email = trim($_POST['email'] ?? '');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Email inválido.";
    exit;
}

// Verificar usuario existe
$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user) {
    // Para seguridad, respondemos igual aunque no exista
    echo "Si el correo existe, recibirás un enlace para restablecer la contraseña.";
    exit;
}

// Generar token seguro
$token = bin2hex(random_bytes(32)); // 64 caracteres
$expires = (new DateTime('+1 hour'))->format('Y-m-d H:i:s');

$stmt = $pdo->prepare("UPDATE users SET reset_token = ?, reset_expires = ? WHERE id = ?");
$stmt->execute([$token, $expires, $user['id']]);

// Preparar link
$resetLink = BASE_URL . "/reset_password.php?token=" . urlencode($token);

// Enviar email (PHP mail() simple - puede requerir configuración de servidor)
// Mensaje simple:
$subject = 'Restablecer contraseña';
$message = "Hola,\n\nHaz clic en el siguiente enlace para restablecer tu contraseña (válido 1 hora):\n\n$resetLink\n\nSi no pediste esto, ignora este correo.\n";
$headers = "From: " . FROM_NAME . " <" . FROM_EMAIL . ">\r\n";

// Intento de envío
$mailSent = @mail($email, $subject, $message, $headers);


// Respuesta al usuario:
echo "Si el correo existe, recibirás un enlace para restablecer la contraseña.";
