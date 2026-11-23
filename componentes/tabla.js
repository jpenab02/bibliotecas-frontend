import { consultarBibliotecas } from '../servicios/bibliotecas.js';

export async function cargarTabla() {
  const cuerpo = document.querySelector('#libros');
  const estado = document.querySelector('#estado-tabla');
  estado.textContent = 'Consultando libros…';
  try {
    const bibliotecas = await consultarBibliotecas();
    const filas = document.createDocumentFragment();
    for (const biblioteca of bibliotecas) {
      for (const libro of biblioteca.libros) {
        const fila = document.createElement('tr');
        for (const valor of [libro.titulo, libro.autor, libro.anio_publicacion, biblioteca.nombre]) {
          fila.insertCell().textContent = valor;
        }
        filas.append(fila);
      }
    }
    cuerpo.replaceChildren(filas);
    estado.textContent = cuerpo.rows.length ? '' : 'Todavía no hay libros registrados.';
  } catch {
    estado.textContent = 'No se pudo actualizar la tabla. Verifica que el backend esté en ejecución.';
  }
}
