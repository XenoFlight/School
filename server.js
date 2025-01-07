const http = require('http');
const app = require('./app');
const port = 2020;
const server = http.createServer(app);
server.listen(port , ()=>{console.log("Server is Running")});