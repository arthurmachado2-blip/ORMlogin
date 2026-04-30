import { User } from '../model/user.model.js';
import bcrypt from 'bcryptjs';

export async function getAllUsers(req, res) {
    //Puxando todos os dados da tabela
    try {
        const allUser = await User.findAll();
        console.log(allUser);
        res.status(201).json(allUser);
    } catch (error) {
        res.status(500).json(error);
    }
}


export async function getUserById(req, res) {
    //Puxando todos os dados da tabela
    try {
        const userId = await User.findByPk(req.params.id);
        if (!userId){
            res.status(404).json({erro: "Usuario nao encontrado!"});
        }
        console.log(userId);
        res.status(201).json(userId);
    } catch (error) {
        res.status(500).json(error);
    } 
}