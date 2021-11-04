/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import bp from 'body-parser';
import cors from 'cors';
import { mongoConnect } from './database/mongodb';
import mainRoutes from './routes';

mongoConnect();

const server = express();
server.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3000/create',
      'http://192.168.0.214:3000',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
server.use(bp.json());
server.use(bp.urlencoded({ extended: true }));

server.use('/api/task', mainRoutes);

server.listen(process.env.PORT, () => {
  console.log('Servidor online!');
});
