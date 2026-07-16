import  prisma  from "../prisma.js"

export const crearImplemento=(implementoData)=>{
    return prisma.implemento.create({data:implementoData})  

}
export const leerImplemento=()=>{
    return prisma.implemento.findMany()
}
export const actualizarImplemento=(implementoId, implementoData)=>{
    return prisma.implemento.update({
        where: { id: implementoId },
        data: implementoData
    })
}
export const eliminarImplemento=(implementoId)=>{
    return prisma.implemento.delete({
        where: { id: implementoId }
    })
}