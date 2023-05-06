import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";
import {Carrera} from "./carrera.js";

export const Sede =sequelize.define('tblSede',{
    IdSede: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    SeNombre: {
        type: DataTypes.STRING(25),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    SeDireccion: {
        type:DataTypes.STRING(100),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    SeUrlImagen:{
        type:DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tblSede',
});

Sede.hasMany(Carrera,{
    foreignKey: "IdSede",
    sourceKey: "IdSede",
    });
    
Carrera.belongsTo(Sede, {
    foreignKey: "IdSede",
    targetKey: "IdSede"
    });