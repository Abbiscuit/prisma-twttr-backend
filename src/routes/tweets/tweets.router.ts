import express from 'express';
import {
  httpGetAllTweets,
  httpGetTweetById,
  httpGetUserDraftTweets,
} from './tweets.controller';

const tweetsRouter = express.Router();

tweetsRouter.get('/', httpGetAllTweets);
tweetsRouter.get('/:id', httpGetTweetById);
tweetsRouter.get('/:id/draft', httpGetUserDraftTweets);

export { tweetsRouter };
