import {Router} from "express";
import {
    getCarreras,
    createCarrera,
    updateCarrera,
    getCarrera,
    getCarreraBeneficios,
    getCarreraExperiencias
} from "../controllers/carrera.controller.js";

const router=Router();

router.get('/carreras',getCarreras);
router.post('/carrera',createCarrera);
router.put('/carrera/:id',updateCarrera);
router.get('/carrera/:id',getCarrera);

router.get("/carrera/:id/beneficios", getCarreraBeneficios);
router.get("/carrera/:id/experiencias", getCarreraExperiencias);

export default router