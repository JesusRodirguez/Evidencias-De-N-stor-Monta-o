<?php
// public/reset_password.php
require_once __DIR__ . '/../backend/config.php';

$token = $_GET['token'] ?? '';
$valid = false;

if ($token) {
    $stmt = $pdo->prepare("SELECT id, reset_expires FROM users WHERE reset_token = ?");
    $stmt->execute([$token]);
    $user = $stmt->fetch();
    if ($user) {
        $expires = new DateTime($user['reset_expires']);
        $now = new DateTime();
        if ($now <= $expires) {
            $valid = true;
        }
    }
}
?>
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Restablecer contraseña</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
  <h2>Restablecer contraseña</h2>
  <?php if (!$valid): ?>
    <p>Enlace inválido o expirado.</p>
    <a href="forgot.html">Solicitar nuevo enlace</a>
  <?php else: ?>
    <form id="resetForm" action="../backend/reset_password_post.php" method="POST">
      <input type="hidden" name="token" value="<?=htmlspecialchars($token)?>">
      <label>Nueva contraseña</label>
      <input type="password" name="password" id="password" required>
      <label>Confirmar contraseña</label>
      <input type="password" name="password_confirm" id="password_confirm" required>
      <button type="submit">Cambiar contraseña</button>
    </form>
    <script>
      document.getElementById('resetForm').addEventListener('submit', function(e){
        const p = document.getElementById('password').value;
        const pc = document.getElementById('password_confirm').value;
        if (p.length < 6){ alert('La contraseña debe tener mínimo 6 caracteres'); e.preventDefault(); return; }
        if (p !== pc){ alert('Las contraseñas no coinciden'); e.preventDefault(); return; }
      });
    </script>
  <?php endif ?>
</div>
</body>
</html>
