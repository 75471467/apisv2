import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";

export const Contenido =sequelize.define('tblContenido',{
    IdContenido: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    CoTitulo: {
        type: DataTypes.STRING(150),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    CoDescripcion: {
        type: DataTypes.STRING(1000),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    CoUrlMedia: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tblContenido',
});
