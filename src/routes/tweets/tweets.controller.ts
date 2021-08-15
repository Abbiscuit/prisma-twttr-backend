import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const httpGetAllTweets = async (req: Request, res: Response) => {
  const tweets = await prisma.tweet.findMany({
    where: {
      published: true,
    },
    include: {
      user: true,
    },
  });

  return res.status(200).json(tweets);
};

export const httpGetTweetById = async (req: Request, res: Response) => {
  const id = req.params.id;

  const tweet = await prisma.tweet.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!tweet) {
    return res.status(400).json({ message: 'tweet not found' });
  }

  return res.status(200).json(tweet);
};

export const httpGetUserDraftTweets = async (req: Request, res: Response) => {
  const id = req.params.id;

  const tweets = await prisma.tweet.findMany({
    where: {
      userId: +id,
      published: false,
    },
  });

  return res.status(200).json(tweets);
};
