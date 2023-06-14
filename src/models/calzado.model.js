const {Schema,model}=require('mongoose');
const calzadoSchema= new Schema({
    numerocontrol:{
        type:String,
        require:true,
        unique:true
    },
    tipo:String,
    marca:String,
    talla:Number,
    preciocompra:Number,
    precioventa:Number,
    existencia:Number
},{
    versionKey:false,
    timestamps:true
});
module.exports=model('calzados',calzadoSchema);