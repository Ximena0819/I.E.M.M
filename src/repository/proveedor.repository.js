import prisma from "../prisma.js"

export const crearProveedor= (proveedorData)=>{
    return await prisma.proveedor.create({data:proveedorData})  

}
export const leerProveedor=()=>{
    return prisma.proveedor.findMany()
}
export const actualizarProveedor=(proveedorId, proveedorData)=>{
    return prisma.proveedor.update({
        where: { id: proveedorId },
        data: proveedorData
    })
}
export const eliminarProveedor=(proveedorId)=>{
    return prisma.proveedor.delete({
        where: { id: proveedorId }
    })
}