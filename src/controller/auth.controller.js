import { User } from '../model/user.model.js';
import bcrypt from 'bcryptjs';

export async function createUser(req, res) {
    try {
        const { email, senha, nome } = req.body;
        // Convertendo a senha em Hash
        const hashSenha = await bcrypt.hash(senha, 10);

        // Imputando dados no banco de dados
        const userCreate = await User.create({
            email: email, 
            senha: hashSenha, 
            nome: nome});

        // Deletar a senha da RESPOSTA da requisição
        const userResponse = userCreate.toJSON();
        delete userResponse.senha;
        res.status(201).json(userResponse);

    } catch (error) {
        res.status(500).json(error);
    }
}

export async function loginUser(req, res) {
    try {
        const { email, senha } = req.body;
        if(!email || !senha){
            res.status(400).json({erro:"Requisição insuficiente"});
        }
        const resUser = await User.findOne({ where: { email } }); 
        if(!resUser){res.status(404).json({erro:"Usuario nao encontrado"});}
        
        const compareSenha = await bcrypt.compare(senha, resUser.senha)
        if(!compareSenha){res.status(401).json({erro:"Credenciais invalidas"})}

        // Caso de certo, assinar o token e devolver o token na requisição 

        res.status(200).json(resUser)
    } catch (error) {
        res.status(500).json(error);
    }
}