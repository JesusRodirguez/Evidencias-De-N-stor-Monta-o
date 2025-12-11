<?php
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
<style>
    body {
    font-family: "Poppins", sans-serif;
    background: linear-gradient(135deg, #141e30, #243b55);
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.container {
    background: rgba(17,17,17,0.85);
    backdrop-filter: blur(10px);
    width: 420px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(123,47,247,0.25);
    animation: slideDown 0.7s ease;
}

@keyframes slideDown {
    from { transform: translateY(-40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

h2 {
    text-align: center;
    margin-bottom: 25px;
    color: #c084fc;
    font-size: 26px;
    font-weight: 600;
}

label {
    display: block;
    margin-top: 12px;
    font-size: 14px;
    font-weight: 600;
    color: #ddd;
}

input[type="password"],
input[type="text"],
input[type="email"] {
    width: 100%;
    padding: 12px;
    margin-top: 5px;
    background: #1a1a1a;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    outline: none;
    font-size: 14px;
    color: #fff;
    transition: 0.3s ease;
}

input:focus {
    border-color: #7b2ff7;
    box-shadow: 0 0 8px rgba(123,47,247,0.5);
}

button {
    width: 100%;
    margin-top: 25px;
    background: linear-gradient(90deg, #7b2ff7, #c084fc);
    color: #000;
    padding: 13px;
    border: none;
    font-size: 15px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s ease;
}

button:hover {
    background: linear-gradient(90deg, #c084fc, #7b2ff7);
}

.msg-error {
    background: rgba(255, 79, 112,0.15);
    color: #ff4f70;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 500;
}

.link {
    margin-top: 15px;
    display: block;
    text-align: center;
    color: #ccc;
    font-size: 14px;
}

.link:hover {
    color: #fff;
    text-decoration: underline;
}

</style>

<body>
<div class="container">
  <h2>Restablecer contraseña</h2>

  <?php if (!$valid): ?>
      <p>Enlace inválido o expirado.</p>
      <a href="forgot.php">Solicitar nuevo enlace</a>
  <?php else: ?>

    <form id="resetForm" action="../backend/reset_password_post.php" method="POST">
      <input type="hidden" name="token" value="<?= htmlspecialchars($token) ?>">

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

        if (p.length < 6){
          alert('La contraseña debe tener mínimo 6 caracteres');
          e.preventDefault();
          return;
        }

        if (p !== pc){
          alert('Las contraseñas no coinciden');
          e.preventDefault();
        }
      });
    </script>

  <?php endif; ?>

</div>
</body>
</html>
