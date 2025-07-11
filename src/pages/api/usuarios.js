import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const{ nome, email, senha, isAdmin, funcao } = req.body;

  if(!nome || !email || !senha || !funcao) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }

  try{
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email},
    });

    if (usuarioExistente) {
      return res.status(400).json({ erro: 'Email já cadastrado' });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: senhaHash,
        funcao,
      },
    });

    return res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
}
