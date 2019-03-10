'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');


//servidor
const app = express();
const port = 3000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();


//rotas
const route = router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: "Node store API",
        version: "0.0.1"
    });
});

app.use('/', route);


/*server.listen(port);
server.listen(port);
console.log('API rodando na porta' + port);*/

// const cpto = require('./xpto/teste')