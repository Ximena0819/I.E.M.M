import {createUsuario} from '../repository/usuario.repository.js'
import {leerUsuario} from '../repository/usuario.repository.js'
import {actualizarUsuario} from '../repository/usuario.repository.js'
import {eliminarUsuario} from '../repository/usuario.repository.js'

export const servicioCrearUsuario = (userData) => {
    return createUsuario(userData);
}
export const servicioLeerUsuario = () => {
    return leerUsuario();
}
export const servicioActualizarUsuario = (userId, userData) => {
    return actualizarUsuario(userId, userData);
}
export const servicioEliminarUsuario = (userId) => {
    return eliminarUsuario(userId);
}