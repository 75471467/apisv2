import {Router} from "express";
import {
    getBeneficios,
    createBeneficio,
    updateBeneficio,
    getBeneficio
} from "../controllers/calificacion.controller.js";

const router=Router();

router.get('/beneficios',getBeneficios);
router.post('/beneficio',createBeneficio);
router.put('/beneficio/:id',updateBeneficio);
router.get('/beneficio/:id',getBeneficio);

export default router