document.addEventListener("DOMContentLoaded", async () => {
  const tabla = document.getElementById("tablaUsuarios");

  const response = await fetch("http://localhost/Login/backend/getUsers.php");
  const data = await response.json();

  if (data.length === 0) {
    tabla.innerHTML = `<tr><td colspan="4">No hay usuarios registrados.</td></tr>`;
    return;
  }

  tabla.innerHTML = "";

  data.forEach(user => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>
        <button class="btn-delete" onclick="deleteUser(${user.id})">Eliminar</button>
      </td>
    `;

    tabla.appendChild(tr);
  });
});

// ELIMINAR USUARIO
async function deleteUser(id) {
  if (!confirm("¿Seguro que deseas eliminar este usuario?")) return;

  const response = await fetch("http://localhost/Login/backend/deleteUser.php?id=" + id);

  const result = await response.text();

  if (result === "OK") {
    alert("Usuario eliminado");
    location.reload();
  } else {
    alert("Error: " + result);
  }
}
