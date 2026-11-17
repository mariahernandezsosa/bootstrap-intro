// ============================================================
// JavaScript del portfolio
// ============================================================

// Validación de formularios de Bootstrap (ya lo hicimos en el Ejercicio 7)

const formulario = document.getElementById('formContacto');
const estado = document.getElementById('estadoFormulario');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // no hay servidor: nunca se envía de verdad
  estado.textContent = '';

  if (!formulario.checkValidity()) {
    evento.stopPropagation();
    formulario.classList.add('was-validated');
    formulario.querySelector(':invalid').focus(); // lleva el foco al primer error
    return;
  }

  // Formulario correcto: aviso accesible (la región role="status" lo anuncia)
  const aviso = document.createElement('div');
  aviso.className = 'alert alert-success mb-0';
  aviso.textContent = '[Mensaje validado correctamente. Gracias por escribirme.]';
  estado.appendChild(aviso);
  formulario.reset();
  formulario.classList.remove('was-validated');
});
