import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";
import {Contenido} from './contenido.js';

export const Tipomedia =sequelize.define('tblTipomedia',{
    IdTipomedia: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    TmNombre: {
        type: DataTypes.STRING(20),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    TmDescripcion: {
        type: DataTypes.STRING(100),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tblTipomedia',
});
Tipomedia.hasMany(Contenido,{
    foreignKey: "IdTipomedia",
    sourceKey: "IdTipomedia",
    });
    
Contenido.belongsTo(Tipomedia, {
    foreignKey: "IdTipomedia",
    targetKey: "IdTipomedia"
    });