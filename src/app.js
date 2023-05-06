import express from 'express';
import morgan from "morgan";

const app = express();


import usuariosRoutes from './routes/usuarios.routes.js'
import beneficiosRoutes from './routes/beneficios.routes.js'
/* import calificacionesRoutes from './routes/calificaciones.routes.js' */
import carrerasRoutes from './routes/carreras.routes.js'
/* import contenidosRoutes from './routes/contenidos.routes.js' */
/* import experienciasRoutes from './routes/experiencias.routes.js' */
/* import preguntasfrecuentesRoutes from './routes/preguntasfrecuentes.routes.js' */
import sedesRoutes from './routes/sedes.routes.js'
/* import solicitarinfosRoutes from './routes/solicitarinfos.routes.js' */
/* import tipomediasRoutes from './routes/tipomedias.routes.js'*/

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes
app.use("/api/usuarios",usuariosRoutes);
app.use("/api/beneficios",beneficiosRoutes);
app.use("/api/calificaciones",calificacionesRoutes);
app.use("/api/carreras",carrerasRoutes);
app.use("/api/contenidos",contenidosRoutes);
app.use("/api/experiencias",experienciasRoutes);
app.use("/api/preguntasfrecuentes",preguntasfrecuentesRoutes);
app.use("/api/sedes",sedesRoutes);
app.use("/api/solicitarinfos",solicitarinfosRoutes);
app.use("/api/tipomedias",tipomediasRoutes);

export default app;