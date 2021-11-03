/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import bp from 'body-parser';
import { mongoConnect } from './database/mongodb';
import mainRoutes from './routes';

mongoConnect();

const server = express();
server.use(bp.json());
server.use(bp.urlencoded({ extended: true }));

server.use('/api/task', mainRoutes);

server.listen(process.env.PORT, () => {
  console.log('Servidor online!');
});
