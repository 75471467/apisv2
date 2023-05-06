import {Router} from "express";
import {
    getUsuarios,
    createUsuario,
    updateUsuario,
    getUsuario
} from "../controllers/usuario.controller.js";

const router=Router();

router.post('/usuarios',createUsuario);
router.get('/usuarios',getUsuarios);
router.put('/usuarios:id',updateUsuario);
router.get('/usuario/:id',getUsuario);

export default router