const express = require('express'); //rotas
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');  //websocket
const routes = require('./routes'); 
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

//string de conexao - mongodb
mongoose.connect('mongodb+srv://<user>:<password>@cluster0-xxjkw.mongodb.net/week10?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.post('/users', (request, response) => { 
    console.log(request.body);
    return response.json({ message: "Hello Omini"});
});

//porta de acesso
server.listen(3333);