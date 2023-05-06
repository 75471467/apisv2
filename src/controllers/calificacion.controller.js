import{Calificacion} from "../models/calificacion.js";

export const getCalificaciones = async(req,res)=>{
    try {
        const calificaciones = await Calificacion.findAll({
          atributes: ["ClDescripcion","ClValor"],
        });
        res.json(calificaciones);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
    }
}
export async function createCalificacion(req, res) {
    const { BeDescripcion} = req.body;
    try {
      let newBeneficio = await Beneficio.create(
        {
          BeDescripcion
        },
        {
          fields: ["BeDescripcion"],
        }
      );
      return res.json(newBeneficio);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
    res.json("received");
}
export async function getBeneficio(req, res) {
    const { IdBeneficio } = req.params;
    try {
      const beneficio = await Beneficio.findOne({
        where: {
            IdBeneficio,
        },
      });
      res.json(beneficio);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}
export const updateBeneficio = async (req, res) => {
    try {
      const { IdBeneficio } = req.params;
      const { BeDescripcion} = req.body;
  
      const beneficio = await Beneficio.findByPk(IdBeneficio);
      beneficio.BeDescripcion=BeDescripcion,
      await beneficio.save();
  
      res.json(beneficio);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  

  