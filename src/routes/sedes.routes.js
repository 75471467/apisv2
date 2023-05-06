import {Router} from "express";
import {
    getSedes,
    createSede,
    updateSede,
    getSede,
    getSedeCarrera
} from "../controllers/sede.controller.js";

const router=Router();

router.get('/sedes',getSedes);
router.post('/sede',createSede);
router.put('/sede/:id',updateSede);
router.get('/sede/:id',getSede);

router.get("/sede/:id/carreras", getSedeCarrera);

export default router