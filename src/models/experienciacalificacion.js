import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";

export const Experienciacalificacion =sequelize.define('tblExperienciacalificacion',{
    IdExperiencia: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'tblExperiencia',
          key: 'IdExperiencia'
        }
      },
      IdCalificacion: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'tblCalificacion',
          key: 'IdCalificacion'
        }
      },
    EcFecha: {
        type: DataTypes.DATE,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tblExperienciacalificacion',
});
