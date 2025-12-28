const http = require("http");
const requestListner = require('./user')
const server = http.createServer(requestListner)
const PORT = 3000;

server.listen(PORT , ()=> {
    console.log(`Server running on address http://localhost:${PORT}`);
    
})
