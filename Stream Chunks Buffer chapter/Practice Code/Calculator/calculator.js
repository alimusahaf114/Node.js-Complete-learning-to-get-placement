const http = require('http')
const myfunction = require('./handler')


const server = http.createServer(myfunction)
const port = 3002
server.listen(port , ()=>{
    console.log(`Server is listening at http://localhost:${port}`);
    
})