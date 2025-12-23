const http = require("http");

console.log("App");
function requestListner(req, res){
    console.log(req.url , req.method ,req.headers );
    if(req.url === '/'){
        res.setHeader('Content-Type' , 'text/html')
        res.write('<html>')
        res.write('<head><title>Complete Coding</title></head>')
        res.write('<body><h1>Hi Asslam Alaikum Welcome to all of you I am Musahaf Ali</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (req.url === "/product"){
        res.setHeader('Content-Type' , 'text/html')
        res.write('<html>')
        res.write('<head><title>Complete Coding</title></head>')
        res.write('<body><h1>Thanks for visiting our services</h1></body>')
        res.write('</html>')
        return res.end()
    } else {
        res.setHeader('Content-Type' , 'text/html')
        res.write('<html>')
        res.write('<head><title>Complete Coding</title></head>')
        res.write('<body><h1>Awwww! I am Sorry for your services</h1></body>')
        res.write('</html>')
        return res.end()
    }
    
}
const server = http.createServer(requestListner)
const PORT = 3000;

server.listen(PORT , ()=> {
    console.log(`Server running on address http://localhost:${PORT}`);
    
})
