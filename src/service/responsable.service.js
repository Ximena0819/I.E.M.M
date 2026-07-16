import {createreReponsable} from '../repository/ubicacion.repository.js'
import {leerResponsable} from '../repository/ubicacion.repository.js'
import {actualizarResponsable} from '../repository/ubicacion.repository.js'
import {eliminarResponsable} from '../repository/ubicacion.repository.js'

export const servicioCrearResponsable = (responsableData) => {
    return createResponsable(responsableData);
}
export const servicioLeerResponsable = () => {
    return leerResponsable();
}
export const servicioActualizarResponsable = (responsableId, responsableData) => {
    return actualizarResponsable(responsableId, responsableData);
}
export const servicioEliminarResponsable = (responsableId) => {
    return eliminarResponsable(responsableId);
}