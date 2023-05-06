import{Usuario} from "../models/usuario.js";

export const getUsuarios = async(req,res)=>{
    try {
        const usuarios = await Usuario.findAll({
          atributes: ["UsEmail", "UsContrasena", "UsNombres", "UsApellidos", "UsTelefono", "UsDNI"],
        });
        res.json(usuarios);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
    }
}
export async function createUsuario(req, res) {
    const { UsEmail, UsContrasena, UsNombres, UsApellidos,UsTelefono,UsDNI } = req.body;
    try {
      let newUsuario = await Usuario.create(
        {
          UsEmail,
          UsContrasena,
          UsNombres,
          UsApellidos,
          UsTelefono,
          UsDNI
        },
        {
          fields: ["UsEmail", "UsContrasena", "UsNombres", "UsApellidos", "UsTelefono", "UsDNI"],
        }
      );
      return res.json(newUsuario);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
    res.json("received");
}
export async function getUsuario(req, res) {
    const { IdUsuario } = req.params;
    try {
      const usuario = await Usuario.findOne({
        where: {
            IdUsuario,
        },
      });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}
export const updateUsuario = async (req, res) => {
    try {
      const { IdUsuario } = req.params;
      const {  UsEmail, UsContrasena, UsNombres, UsApellidos,UsTelefono,UsDNI } = req.body;
  
      const usuario = await Usuario.findByPk(IdUsuario);
      usuario.UsEmail = UsEmail;
      usuario.UsContrasena = UsContrasena;
      usuario.UsNombres = UsNombres;
      usuario.UsApellidos = UsApellidos;
      usuario.UsTelefono = UsTelefono;
      usuario.UsDNI = UsDNI;
      await usuario.save();
  
      res.json(usuario);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  

  