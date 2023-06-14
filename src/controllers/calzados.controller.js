const Calzado=require('../models/calzado.model');
const calzadosController={};

calzadosController.obtenerCalzados=async(req,res)=>{
    const calzados=await Calzado.find();
    res.json(calzados);
};

calzadosController.obtenerCalzado=async(req,res)=>{
    const calzado=await Calzado.findOne({numerocontrol:req.params.nc});
    if (calzado!=null)
        res.json(calzado)
    else
        res.json({status:'Not Found'});
};

calzadosController.insertarCalzado=async(req,res)=>{
    const calzadoInsertado=new Calzado(req.body);
    await calzadoInsertado.save();
    res.json({status:'Calzado insertado'});
};

calzadosController.actualizarCalzado=async(req,res)=>{
    const resp = await Calzado.findOneAndUpdate({numerocontrol:req.params.nc},req.body);
    if (res!=null)
        res.json({status:'Calzado actualizado'});
    else
        res.json({status:'Not Found'});
};

calzadosController.eliminarCalzado=async(req,res)=>{
    const resp = await Calzado.findOneAndDelete({numerocontrol:req.params.nc});
    if (res!=null)
        res.json({status:'Calzado eliminado'});
    else
        res.json({status:'Not Found'});
};

module.exports=calzadosController;