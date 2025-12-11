// public/app.js
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      const name = registerForm.name.value.trim();
      const email = registerForm.email.value.trim();
      const p = registerForm.password.value;
      const pc = registerForm.password_confirm.value;
      const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

      if (!namePattern.test(name)) {
        alert('Nombre inválido. Solo letras y espacios.');
        e.preventDefault(); return;
      }
      if (!validateEmail(email)) { alert('Email inválido'); e.preventDefault(); return; }
      if (p.length < 6) { alert('La contraseña debe tener al menos 6 caracteres'); e.preventDefault(); return; }
      if (p !== pc) { alert('Las contraseñas no coinciden'); e.preventDefault(); return; }
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      const email = loginForm.email.value.trim();
      const p = loginForm.password.value;
      if (!validateEmail(email)){ alert('Email inválido'); e.preventDefault(); return; }
      if (p.length < 1){ alert('Escribe la contraseña'); e.preventDefault(); return; }
    });
  }

  const forgotForm = document.getElementById('forgotForm');
  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      const email = forgotForm.email.value.trim();
      if (!validateEmail(email)){ alert('Email inválido'); e.preventDefault(); return; }
    });
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
