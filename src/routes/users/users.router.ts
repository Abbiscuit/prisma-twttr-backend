import express from 'express';
import { httpGetAllUsers, httpGetUserById } from './users.controller';

const usersRouter = express.Router();

usersRouter.get('/', httpGetAllUsers);
usersRouter.get('/:id', httpGetUserById);

export { usersRouter };
