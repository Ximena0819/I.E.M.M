import  prisma  from "../prisma.js"

export const crearUsuario=(userData)=>{
    return prisma.usuario.create({data:userData})  

}
export const leerUsuario=()=>{
    return prisma.usuario.findMany()

}
export const actualizarUsuario=(userId, userData)=>{
    return prisma.usuario.update({
        where: { id: userId },
        data: userData
    })
}
export const eliminarUsuario=(userId)=>{
    return prisma.usuario.delete({
        where: { id: userId }
    })
}