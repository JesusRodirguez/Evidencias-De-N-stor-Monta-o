<?php
// backend/config.php

define('DB_HOST', 'localhost');
define('DB_NAME', 'auth_demo');
define('DB_USER', 'root');
define('DB_PASS', ''); 

// Para el envío de correos
define('FROM_EMAIL', 'noreply@tudominio.com');
define('FROM_NAME', 'Auth Demo');
define('BASE_URL', 'http://localhost/proyecto-auth/public'); // cambia según tu ruta pública

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8mb4", DB_USER, DB_PASS, $options);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
