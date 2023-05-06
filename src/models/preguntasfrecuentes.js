import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";
export const Preguntasfrecuentes =sequelize.define('tblPreguntasfrecuentes',{
    IdPreguntaFrecuente: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    PfPregunta: {
        type: DataTypes.STRING(500),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    PfRespuesta: {
        type: DataTypes.STRING(2000),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tblPreguntasfrecuentes',
});
