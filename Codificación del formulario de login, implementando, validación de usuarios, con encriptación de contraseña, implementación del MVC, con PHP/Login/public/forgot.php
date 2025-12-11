<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Recuperar contraseña</title>
<style>
    body {
        background: #0f172a;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: Arial;
        color: white;
    }

    .card {
        background: #1e293b;
        padding: 30px;
        border-radius: 12px;
        width: 350px;
        box-shadow: 0 0 15px rgba(0,0,0,0.3);
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    input {
        width: 100%;
        padding: 12px;
        margin-top: 10px;
        border-radius: 8px;
        border: none;
        outline: none;
    }

    button {
        width: 100%;
        padding: 12px;
        margin-top: 20px;
        background: #4f46e5;
        border: none;
        border-radius: 8px;
        color: white;
        transition: 0.3s;
        cursor: pointer;
    }

    button:hover {
        background: #6366f1;
    }

    .alert {
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 15px;
        text-align: center;
    }

    .error { background: #ef4444; }
    .success { background: #22c55e; }
</style>
</head>
<body>

<div class="card">
    <h2>Recuperar contraseña</h2>

    <?php if (isset($_GET["error"])): ?>
        <div class="alert error"><?= htmlspecialchars($_GET["error"]) ?></div>
    <?php endif ?>

    <?php if (isset($_GET["success"])): ?>
        <div class="alert success"><?= htmlspecialchars($_GET["success"]) ?></div>
    <?php endif ?>

    <form action="../backend/forgot_password.php" method="POST">
        <input type="email" name="email" placeholder="Tu correo" required>
        <button type="submit">Enviar enlace</button>
    </form>
</div>

</body>
</html>
