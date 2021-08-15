import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { api } from './routes/api';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(morgan('dev'));
app.use(express.json());

app.use('/v1', api);

export { app };
