import  Prisma  from "../prisma.js"

export const crearUsuario=(userData)=>{
    return Prisma.usuario.create({data:userData})  

}
export const leerUsuario=()=>{
    return Prisma.usuario.findMany()

}
export const actualizarUsuario=(userId, userData)=>{
    return Prisma.usuario.update({
        where: { id: userId },
        data: userData
    })
}
export const eliminarUsuario=(userId)=>{
    return Prisma.usuario.delete({
        where: { id: userId }
    })
}