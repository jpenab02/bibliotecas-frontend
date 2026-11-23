import { iniciarFormulario } from './componentes/formulario.js';
import { cargarTabla } from './componentes/tabla.js';

iniciarFormulario(cargarTabla);
document.querySelector('#actualizar').addEventListener('click', cargarTabla);
cargarTabla();
