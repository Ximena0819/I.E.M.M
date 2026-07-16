import {
    servicioCrearUbicacion,
    serviceLeerUbicacion,
    servicioActualizarUbicacion,
    servicioEliminarUbicacion
} from "../service/ubicacion.service.js"

export const createUbicacion= async (req, res)=>{
    try{
        const ubicacion = await servicioCrearUbicacion(req.body);
        res.status(201).json(ubicacion);
    }catch (e){
        res.status(500).json({error: e.message});
    }
};

export const leerUbicacion= async (req, res)=>{
     try{
      const ubicacion = await servicioLeerUbicacion();
        res.status(200).json(ubicacion);
        }catch (error){
            res.status(500).json({error: error.message});
        }
};
export const actualizarUbicacion= async (req, res)=>{
    try{
        const Id=Number(req.params.id)
        const ubicacion=await servicioActualizarUbicacion(Id,req.body);
        res.status(200).json(ubicacion);
    }catch (error){
        res.status(400).json({error: error.message});
    }
};
export const eliminarUbicacion=async(req, res)=>{
    try{
        const id = Number (req.params.id);
        await servicioEliminarUbicacion(id);
        res.status(204).send();
    }catch (error){
        res.status(400).json({error: error.message});
        
    }

};
