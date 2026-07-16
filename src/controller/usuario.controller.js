import {
    servicioCrearUsuario,
    serviceLeerUsuario,
    servicioActualizarUsuario,
    servicioEliminarUsuario
} from "../service/usuario.service.js"

export const createUsuario= async (req, res)=>{
    try{
        const usuario = await servicioCrearUsuario(req.body);
        res.status(201).json(usuario);
    }catch (e){
        res.status(500).json({error: e.message});
    }
};

export const leerUsuario= (req, res)=>{
     try{
      const usuario = await servicioLeerUsuario();
        res.status(200).json(usuario);
        }catch (error){
            res.status(500).json({error: error.message});
        }
};
export const actualizarUsuario= async (req, res)=>{
    try{
        const Id=Number(req.params.id)
        const user=await servicioActualizarUsuario(Id,req.body);
        res.status(200).json(user);
    }catch (error){
        res.status(400).json({error: error.message});
    }
};
export const eliminarUsuario=async(req, res)=>{
    try{
        const id = Number (req.params.id);
        await servicioEliminarUsuario(id);
        res.status(204).send();
    }catch (error){
        res.status(400).json({error: error.message});
        
    }

};
