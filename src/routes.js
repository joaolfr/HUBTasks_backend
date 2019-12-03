const express = require('express');
const SessionController = require('./controllers/SessionController');
const TaskController = require('./controllers/TaskController');
const DashboardController = require('./controllers/DashboardController');
const routes = express.Router();


routes.post('/users', SessionController.store); //criação de novo usuário
routes.post('/authenticate', SessionController.show); //autenticação de usuário

routes.post('/task', TaskController.store); //cria uma nova task vinculada a um user
routes.get('/tasks', TaskController.show);  //lista as tasks do usuário
routes.put('/update/:id', TaskController.update);  //atualiza as tasks do usuário
routes.put('/delete/:id', TaskController.delete);  //atualiza as tasks do usuário

module.exports = routes;