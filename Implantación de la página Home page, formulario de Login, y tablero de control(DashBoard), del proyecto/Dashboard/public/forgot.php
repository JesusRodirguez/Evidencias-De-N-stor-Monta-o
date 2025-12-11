<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Recuperar contraseña</title>
<style>
    body {
    background: #0a0a0a;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: "Poppins", sans-serif;
    color: #fff;
}

.card {
    background: rgba(17,17,17,0.85);
    backdrop-filter: blur(10px);
    padding: 30px;
    border-radius: 12px;
    width: 350px;
    box-shadow: 0 0 20px rgba(123,47,247,0.25);
    animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #c084fc;
    font-weight: 600;
    font-size: 24px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.12);
    background: #1a1a1a;
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: 0.3s;
}

input:focus {
    border-color: #7b2ff7;
    box-shadow: 0 0 10px rgba(123,47,247,0.5);
}

button {
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg, #7b2ff7, #c084fc);
    color: #000;
    font-weight: 600;
    cursor: pointer;
    font-size: 15px;
    transition: 0.3s;
}

button:hover {
    background: linear-gradient(90deg, #c084fc, #7b2ff7);
    transform: scale(1.03);
}

.alert {
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 500;
}

.error {
    background: rgba(255,79,112,0.2);
    color: #ff4f70;
}

.success {
    background: rgba(34,197,94,0.2);
    color: #22c55e;
}

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
