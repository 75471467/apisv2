import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";
import { Experienciacalificacion } from './experienciacalificacion.js';

export const Calificacion =sequelize.define('tblCalificacion',{
    IdCalificacion: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ClDescripcion: {
        type: DataTypes.STRING(1000),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    ClValor: {
        type:DataTypes.INTEGER.UNSIGNED,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tblCalificacion',
});
Calificacion.hasMany(Experienciacalificacion,{
    foreignKey: "IdCalificacion",
    sourceKey: "IdCalificacion",
    });
    
Experienciacalificacion.belongsTo(Calificacion, {
    foreignKey: "IdCalificacion",
    targetKey: "IdCalificacion"
    });