import {createProveedor} from '../repository/ubicacion.repository.js'
import {leerProveedor} from '../repository/ubicacion.repository.js'
import {actualizarProveedor} from '../repository/ubicacion.repository.js'
import {eliminarProveedor} from '../repository/ubicacion.repository.js'

export const servicioCrearProveedor = (proveedorData) => {
    return createProveedor(proveedorData);
}
export const servicioLeerProveedor = () => {
    return leerProveedor();
}
export const servicioActualizarProveedor = (proveedorId, proveedorData) => {
    return actualizarProveedor(proveedorId, proveedorData);
}
export const servicioEliminarProveedor = (proveedorId) => {
    return eliminarProveedor(proveedorId);
}