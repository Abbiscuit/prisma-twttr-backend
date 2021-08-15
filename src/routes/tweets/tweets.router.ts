import express from 'express';
import { httpGetAllTweets, httpGetTweetById } from './tweets.controller';

const tweetsRouter = express.Router();

tweetsRouter.get('/', httpGetAllTweets);
tweetsRouter.get('/:id', httpGetTweetById);

export { tweetsRouter };
