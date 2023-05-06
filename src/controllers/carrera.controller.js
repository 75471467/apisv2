import{Carrera} from "../models/carrera.js";
import { Experiencia } from "../models/experiencia.js";

export const getCarreras = async(req,res)=>{
    try {
        const carreras = await Carrera.findAll({
          atributes: ["CaNombre", "CaDescripcion", "CaPlanEstudiosUrl", "CaCantidadCiclos"],
        });
        res.json(carreras);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
    }
}
export async function createCarrera(req, res) {
    const { CaNombre, CaDescripcion, CaPlanEstudiosUrl, CaCantidadCiclos} = req.body;
    try {
      let newCarrera = await Carrera.create(
        {
          CaNombre,
          CaDescripcion,
          CaPlanEstudiosUrl,
          CaCantidadCiclos,
        },
        {
          fields: ["CaNombre", "CaDescripcion", "CaPlanEstudiosUrl", "CaCantidadCiclos"],
        }
      );
      return res.json(newCarrera);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
    res.json("received");
}
export async function getCarrera(req, res) {
    const { IdCarrera } = req.params;
    try {
      const carrera = await Carrera.findOne({
        where: {
            IdCarrera,
        },
      });
      res.json(carrera);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}
export const updateCarrera = async (req, res) => {
    try {
      const { IdCarrera } = req.params;
      const {  CaNombre, CaDescripcion, CaPlanEstudiosUrl, CaCantidadCiclos } = req.body;
  
      const carrera = await Carrera.findByPk(IdCarrera);
      carrera.CaNombre = CaNombre,
      carrera.CaDescripcion = CaDescripcion,
      carrera.CaPlanEstudiosUrl = CaPlanEstudiosUrl,
      carrera.CaCantidadCiclos = CaCantidadCiclos;
      await carrera.save();
  
      res.json(carrera);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};
export async function getCarreraBeneficios(req, res) {
    const { IdCarrera } = req.params;
    try {
      const beneficios = await Beneficio.findAll({
        attributes: ["IdBeneficio", "BeDescripcion","IdCarrera"],
        where: { IdCarrera: IdCarrera },
      });
      res.json(beneficios);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
} 
export async function getCarreraExperiencias(req, res) {
    const { IdCarrera } = req.params;
    try {
      const experiencias = await Experiencia.findAll({
        attributes: ["IdExperiencia", "ExNombre","ExCicloInicio","ExCicloFin","ExFila","ExIconoUrl","IdCarrera"],
        where: { IdCarrera: IdCarrera },
      });
      res.json(experiencias);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
} 
  