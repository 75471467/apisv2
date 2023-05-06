import app from './app.js';
import {sequelize} from './database/database.js'; 

async function main() {
    try {
        await sequelize.sync({force: false});
        console.log('Conexion exitosa');
        app.listen(3000);
        console.log('🚀Starting server',3000);
    } catch (error) {
        console.log('No se pudo conectar con la base de datos',error);
    }
}
main()