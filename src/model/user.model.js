import sequelize from "../database/db.js";
import { DataTypes } from 'sequelize';

export const User = sequelize.define('User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
},
        ativo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
        
});
