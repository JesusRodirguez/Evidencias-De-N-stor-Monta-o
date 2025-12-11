document.getElementById("loginForm").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensaje");

    if (email === "" || password === "") {
        e.preventDefault();
        mensaje.textContent = "Todos los campos son obligatorios";
        mensaje.style.color = "red";
        return;
    }

    // Si pasa la validación, el formulario se envía normal con action
});
