const { Router } = require('express'); 
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// listar devs
routes.get('/devs', DevController.index);

// cadastrar devs
routes.post('/devs', DevController.store);

// buscar devs
routes.get('/search', SearchController.index);

module.exports = routes;