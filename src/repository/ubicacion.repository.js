import { Prisma } from "../prisma.js"

export const crearUbicacion=(ubicacionData)=>{
    return Prisma.ubicacion.create({data:ubicacionData})  

}
export const leerUbicacion=()=>{
    return Prisma.ubicacion.findMany()
}
export const actualizarUbicacion=(ubicacionId, ubicacionData)=>{
    return Prisma.ubicacion.update({
        where: { id: ubicacionId },
        data: ubicacionData
    })
}
export const eliminarUbicacion=(ubicacionId)=>{
    return Prisma.ubicacion.delete({
        where: { id: ubicacionId }
    })  
}