import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";
import { Contenido } from './contenido.js';
import {Experienciacalificacion} from './experienciacalificacion.js';

export const Experiencia =sequelize.define('tblExperiencia',{
    IdExperiencia: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ExNombre: {
        type: DataTypes.STRING(150),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    ExCicloInicio: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    ExCicloFin:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    ExFila:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    ExIconoUrl:{
        type:DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tblExperiencia'
});
Experiencia.hasMany(Contenido,{
    foreignKey: "IdExperiencia",
    sourceKey: "IdExperiencia",
    });
    
Contenido.belongsTo(Experiencia, {
    foreignKey: "IdExperiencia",
    targetKey: "IdExperiencia"
    });

Experiencia.hasMany(Experienciacalificacion,{
    foreignKey: "IdExperiencia",
    sourceKey: "IdExperiencia",
    });
    
Experienciacalificacion.belongsTo(Experiencia, {
    foreignKey: "IdExperiencia",
    targetKey: "IdExperiencia"
    });