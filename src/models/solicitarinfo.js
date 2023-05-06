import {DataTypes} from 'sequelize'; 
import {sequelize} from "../database/database.js";
export const Solicitarinfo =sequelize.define('tblSolicitarinfo',{
    IdSolicitarInfo: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    SiNombre: {
        type: DataTypes.STRING(100),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    SiApellidoPaterno: {
        type: DataTypes.STRING(100),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    SiApellidoMaterno: {
        type: DataTypes.STRING(100),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    SiCorreo: {
        type: DataTypes.STRING(150),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    SiTelefono: {
        type: DataTypes.STRING(20),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    SiFechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    CaNombre: {
        type: DataTypes.STRING(150),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    SeNombre: {
        type: DataTypes.STRING(25),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    SiModalidad: {
        type: DataTypes.STRING(20),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    SiFechaSolicitud: {
        type: DataTypes.DATE,
        allowNull: false
    },
    SiTipoContacto: {
        type: DataTypes.STRING(20),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tblSolicitarinfo',
});
