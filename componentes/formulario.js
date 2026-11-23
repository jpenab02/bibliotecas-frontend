import { registrarBiblioteca } from '../servicios/bibliotecas.js';

export function iniciarFormulario(alRegistrar) {
  const formulario = document.querySelector('#registro');
  const estado = document.querySelector('#estado-registro');
  formulario.addEventListener('submit', async evento => {
    evento.preventDefault();
    const datos = Object.fromEntries(new FormData(formulario));
    for (const campo of Object.keys(datos)) {
      datos[campo] = datos[campo].trim();
      if (!datos[campo]) {
        estado.textContent = 'Completa todos los campos.';
        formulario.elements[campo].focus();
        return;
      }
    }
    const boton = formulario.querySelector('button');
    boton.disabled = true;
    estado.textContent = 'Guardando…';
    try {
      const sede = await registrarBiblioteca(datos);
      estado.textContent = 'Biblioteca registrada: ' + sede.nombre + '.';
      formulario.reset();
      await alRegistrar();
    } catch {
      estado.textContent = 'No se pudo confirmar el registro. Verifica la conexión con el backend.';
    } finally {
      boton.disabled = false;
    }
  });
}
