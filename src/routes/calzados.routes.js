const {Router}=require('express');
const calzadosController=require('../controllers/calzados.controller');

const router=Router();
router.get('/',calzadosController.obtenerCalzados);
router.get('/:nc',calzadosController.obtenerCalzado);
router.post('/insert',calzadosController.insertarCalzado);
router.put('/actualizar/:nc',calzadosController.actualizarCalzado);
router.delete('/borrar/:nc',calzadosController.eliminarCalzado);
module.exports=router;