import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";
import { Experiencia } from './experiencia.js';
import { Beneficio } from './beneficio.js';

export const Carrera =sequelize.define('tblCarrera',{
    IdCarrera: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    CaNombre: {
        type: DataTypes.STRING(50),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    CaDescripcion: {
        type:DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    CaPlanEstudiosUrl:{
        type:DataTypes.STRING(100),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    CaCantidadCiclos:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }
}, {
    timestamps: false,

    tableName: 'tblCarrera',
});

Carrera.hasMany(Beneficio,{
    foreignKey: "IdCarrera",
    sourceKey: "IdCarrera",
    });
    
Beneficio.belongsTo(Carrera, {
    foreignKey: "IdCarrera",
    targetKey: "IdCarrera"
    });
Carrera.hasMany(Experiencia,{
    foreignKey: "IdCarrera",
    sourceKey: "IdCarrera",
    });
    
Experiencia.belongsTo(Carrera, {
    foreignKey: "IdCarrera",
    targetKey: "IdCarrera"
    });
