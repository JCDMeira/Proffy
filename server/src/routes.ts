import express from 'express';
import ClassesControler from './controllers/ClassesControler';
import ConnetionsController from './controllers/ConnectionsControler';


const routes = express.Router();
const classesControlers = new ClassesControler();
const connectionsController = new ConnetionsController();

routes.get('/classes', classesControlers.index);
routes.post('/classes', classesControlers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;