import express from 'express';
import { tweetsRouter } from './tweets/tweets.router';
import { usersRouter } from './users/users.router';

const api = express.Router();

api.use('/users', usersRouter);
api.use('/tweets', tweetsRouter);

export { api };
