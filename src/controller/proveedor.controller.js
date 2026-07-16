import {
    servicioCrearProveedor,
    serviceLeerProveedor,
    servicioActualizarProveedor,
    servicioEliminarProveedor
} from "../service/proveedor.service"

export const createProveedor=()=>{src/service
    try{
        const proveedor = await servicioCrearProveedor(req.body);
        res.status(201).json(proveedor);
    }catch (e){
        res.status(500).json({error: e.message});
    }
};

export const leerProveedor= (req, res)=>{
     try{
      const proveedor = await servicioLeerProveedor();
        res.status(200).json(proveedor);
        }catch (error){
            res.status(500).json({error: error.message});
        }
};
export const actualizarProveedor=()=>{
    try{
        const Id=Number(req.params.id)
        const proveedor=await servicioActualizarProveedor(Id,req.body);
        res.status(200).json(proveedor);
    }catch (error){
        res.status(400).json({error: error.message});
    }
};
export const eliminarProveedor=async(req, res)=>{
    try{
        const id = Number (req.params.id);
        await servicioEliminarProveedor(id);
        res.status(204).send();
    }catch (error){
        res.status(400).json({error: error.message});
        
    }

};
