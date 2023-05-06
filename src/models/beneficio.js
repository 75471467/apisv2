import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";

export const Beneficio =sequelize.define('tblBeneficio',{
    IdBeneficio: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    BeDescripcion: {
        type: DataTypes.STRING(1000),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    }
}, {
    tableName: 'tblBeneficio',
    timestamps: false,
    
});
