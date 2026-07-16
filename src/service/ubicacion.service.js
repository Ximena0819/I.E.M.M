import {createUbicacion} from '../repository/ubicacion.repository.js'
import {leerUbicacion} from '../repository/ubicacion.repository.js'
import {actualizarUbicacion} from '../repository/ubicacion.repository.js'
import {eliminarUsuario} from '../repository/ubicacion.repository.js'

export const servicioCrearUbicacion = (ubicacionData) => {
    return createUbicacion(ubicacionData);
}
export const servicioLeerUbicacion = () => {
    return leerUbicacion();
}
export const servicioActualizarUbicacion = (ubicacionId, ubicacionData) => {
    return actualizarUbicacion(ubicacionId, ubicacionData);
}
export const servicioEliminarUbicacion = (ubicacionId) => {
    return eliminarUbicacion(ubicacionId);
}