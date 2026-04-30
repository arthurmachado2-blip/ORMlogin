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
