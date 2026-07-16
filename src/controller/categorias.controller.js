import {
    servicioCrearCategorias,
    serviceLeerCategorias,
    servicioActualizarCategorias,
    servicioEliminarCategorias
} from "../service/categoria.service.js";

export const CreateCategorias= async (req, res)=>{
    try{
        const categorias = await servicioCrearCategorias(req.body);
        res.status(201).json(categorias);
    }catch (e){
        res.status(500).json({error: e.message});
    }
};

export const LeerCategorias= async (req, res)=>{
     try{
      const categorias = await servicioLeerCategorias();
        res.status(200).json(categorias);
        }catch (error){
            res.status(500).json({error: error.message});
        }
};
export const ActualizarCategorias= async (req, res)=>{
    try{
        const Id=Number(req.params.id)
        const categorias=await servicioActualizarCategorias(Id,req.body);
        res.status(200).json(categorias);
    }catch (error){
        res.status(400).json({error: error.message});
    }
};
export const EliminarCategorias=async(req, res)=>{
    try{
        const id = Number (req.params.id);
        await servicioEliminarCategorias(id);
        res.status(204).send();
    }catch (error){
        res.status(400).json({error: error.message});
        
    }

};
