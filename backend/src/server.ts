/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import { mongoConnect } from './database/mongodb';
import mainRoutes from './routes';

mongoConnect();

const server = express();

server.use('/api/task', mainRoutes);

server.listen(process.env.PORT, () => {
  console.log('Servidor online!');
});
