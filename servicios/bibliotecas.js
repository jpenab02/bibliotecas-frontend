const url = 'http://localhost:8080/bibliotecas';

/** @returns {Promise<import('../modelos/catalogo.js').Biblioteca[]>} */
export async function consultarBibliotecas() {
  const respuesta = await fetch(url);
  if (!respuesta.ok) throw new Error('Falló la consulta.');
  return respuesta.json();
}

/** @param {Pick<import('../modelos/catalogo.js').Biblioteca, 'nombre'|'direccion'|'ciudad'>} datos */
export async function registrarBiblioteca(datos) {
  const respuesta = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  if (!respuesta.ok) throw new Error('Falló el registro.');
  return respuesta.json();
}
