import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";

export const Coordinador =sequelize.define('tblCoordinador',{
    IdCoordinador: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    timestamps: false,

    tableName: 'tblCoordinador',
});
///necesidad invalida