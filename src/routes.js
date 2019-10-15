import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Lorena Calaça',
    email: 'lorena.calaca.od@gmail.com',
    password_hash: 'senha123',
  });

  res.json(user);
});

export default routes;
