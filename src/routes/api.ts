import express from 'express';
import { tweetsRouter } from './tweets/tweets.router';
import { UsersRouter } from './users/users.router';

const api = express.Router();

api.use('/users', UsersRouter);
api.use('/tweets', tweetsRouter);

export { api };
