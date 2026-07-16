import {
    servicioCrearResponsable,
    servicioLeerResponsable,
    servicioActualizarResponsable,
    servicioEliminarResponsable
} from "../service/responsable.service"

export const createResponsable=()=>{
    try{
        const responsable = await servicioResponsable(req.body);
        res.status(201).json(responsable);
    }catch (e){
        res.status(500).json({error: e.message});
    }
};

export const leerResponsable= (req, res)=>{
     try{
      const responsable = await serviceLeeResponsable();
        res.status(200).json(responsable);
        }catch (error){
            res.status(500).json({error: error.message});
        }
};
export const actualizarResponsable=()=>{
    try{
        const Id=Number(req.params.id)
        const user=await servicioActualizarResponsable(Id,req.body);
        res.status(200).json(user);
    }catch (error){
        res.status(400).json({error: error.message});
    }
};
export const eliminarResponsable=async(req, res)=>{
    try{
        const id = Number (req.params.id);
        await servicioEliminarResponsable(id);
        res.status(204).send();
    }catch (error){
        res.status(400).json({error: error.message});
        
    }

};
