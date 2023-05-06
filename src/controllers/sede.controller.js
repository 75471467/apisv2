import{Sede} from "../models/sede.js";
import { Carrera } from "../models/carrera.js";

export const getSedes = async(req,res)=>{
    try {
        const sedes = await Sede.findAll({
          atributes: ["SeNombre", "SeDireccion", "SeUrlImagen"],
        });
        res.json(sedes);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
    }
}
export async function createSede(req, res) {
    const { SeNombre, SeDireccion, SeUrlImagen} = req.body;
    try {
      let newSede = await Sede.create(
        {
            SeNombre,
            SeDireccion,
            SeUrlImagen,
        },
        {
          fields: ["SeNombre", "SeDireccion", "SeUrlImagen"],
        }
      );
      return res.json(newSede);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
    res.json("received");
}
export async function getSede(req, res) {
    const { IdSede } = req.params;
    try {
      const sede = await Sede.findOne({
        where: {
            IdSede,
        },
      });
      res.json(sede);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}
export const updateSede = async (req, res) => {
    try {
      const { IdSede } = req.params;
      const { SeNombre, SeDireccion, SeUrlImagen} = req.body;
  
      const sede = await Sede.findByPk(IdSede);
      sede.SeNombre = SeNombre,
      sede.SeDireccion = SeDireccion,
      sede.SeUrlImagen = SeUrlImagen,
      await sede.save();
  
      res.json(sede);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};
export async function getSedeCarrera(req, res) {
    const { IdSede } = req.params;
    try {
      const carreras = await Carrera.findAll({
        attributes: ["IdCarrera", "CaNombre","CaDescripcion","CaPlanEstudiosUrl","CaCantidadCiclos","IdSede"],
        where: { IdSede: IdSede },
      });
      res.json(carreras);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
} 