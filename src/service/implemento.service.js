import {createImplemento} from '../repository/ubicacion.repository.js'
import {leerImplemento} from '../repository/ubicacion.repository.js'
import {actualizarImplemento} from '../repository/ubicacion.repository.js'
import {eliminarImplemento} from '../repository/ubicacion.repository.js'

export const servicioCrearImplemento = (implementoData) => {
    return createImplemento(implementoData);
}
export const servicioLeerImplemento = () => {
    return leerImplemento();
}
export const servicioActualizarImplemento = (implementoId, implementoData) => {
    return actualizarImplemento(implementoId, implementoData);
}
export const servicioEliminarImplemento = (implementoId) => {
    return eliminarImplemento(implementoId);
}