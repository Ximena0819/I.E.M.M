import {
    servicioCrearImplemento,
    serviceLeerImplemento,
    servicioActualizarImplemento,
    servicioEliminarImplemento
} from "../service/implemento.service.js"

export const CreateImplemento=()=>{
    try{
        const implemento = await servicioCrearImplemento(req.body);
        res.status(201).json(implemento);
    }catch (e){
        res.status(500).json({error: e.message});
    }
};

export const LeerImplemento= (req, res)=>{
     try{
      const implemento = await servicioLeerImplemento();
        res.status(200).json(implemento);
        }catch (error){
            res.status(500).json({error: error.message});
        }
};
export const ActualizarImplemento= async (req, res )=>{
    try{
        const Id=Number(req.params.id)
        const implemento=await servicioActualizarImplemento(Id,req.body);
        res.status(200).json(implemento);
    }catch (error){
        res.status(400).json({error: error.message});
    }
};
export const EliminarImplemento=async(req, res)=>{
    try{
        const id = Number (req.params.id);
        await servicioEliminarImplemento(id);
        res.status(204).send();
    }catch (error){
        res.status(400).json({error: error.message});
        
    }

};
