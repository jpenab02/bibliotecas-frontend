# Bibliotecas · frontend

Interfaz en HTML, CSS y JavaScript con módulos nativos. Requiere Python 3 para servir los archivos y un navegador moderno. Desde esta carpeta ejecuta:

~~~sh
python3 -m http.server 4200 --bind 127.0.0.1
~~~

Abre http://localhost:4200 e inicia bibliotecas-backend en otra terminal. La API se configura en servicios/bibliotecas.js y apunta a http://localhost:8080/bibliotecas.

El formulario registra nombre, dirección y ciudad. La tabla carga los libros asociados desde la API y muestra título, autor, año y sede. Una sede recién registrada aparece en GET con su colección vacía. El botón Actualizar vuelve a consultar el catálogo.

Los componentes de formulario y tabla están en componentes/. El servicio concentra fetch y los modelos Biblioteca y Libro están definidos con tipos JSDoc en modelos/catalogo.js, que Code OSS puede interpretar sin compilación.
