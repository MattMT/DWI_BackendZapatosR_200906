const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://MattMT:1234@mateo13.qn1ir.mongodb.net/zapateriadb?retryWrites=true&w=majority")
.then(db=>console.log("MongoBD connected..."))
.catch(err=>console.error(err));