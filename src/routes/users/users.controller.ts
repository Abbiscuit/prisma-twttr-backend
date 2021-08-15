import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const httpGetAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  return res.status(200).json(users);
};

export const httpGetUserById = async (req: Request, res: Response) => {
  const id = req.params.id;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    return res.status(400).json({ message: 'user not found' });
  }

  return res.status(200).json(user);
};
