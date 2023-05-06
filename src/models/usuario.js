import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";

export const Usuario =sequelize.define('tblUsuario',{
    IdUsuario: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    UsEmail: {
        type: DataTypes.STRING(50),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    UsContrasena: {
        type:DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    UsNombres:{
        type:DataTypes.STRING(100),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    UsApellidos:{
        type:DataTypes.STRING(100),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    UsTelefono:{
        type:DataTypes.STRING(25),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    UsDNI:{
        type:DataTypes.STRING(15),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false,
    tableName: 'tblUsuario',
});