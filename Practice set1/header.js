const http = require('http')


function showingHeader(req , res){
    if(req.url === "/home"){
        res.write('<h1> Welcome to Home </h1>')
    } else if(req.url === "/facebook") {
        res.write('<h1> Welcome to Home </h1>')        
    }else if(req.url === "/instagram") {
        res.write('<h1> Welcome to Home </h1>')        
    }else if(req.url === "/linkedin") {
        res.write('<h1> Welcome to Home </h1>')        
    }else if(req.url === "/twitter") {
        res.write('<h1> Welcome to Home </h1>')        
    } else {

        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
    res.write('<head><title>Links</title></head>');
    res.write('<body>');
    res.write('<a href="/"> HOME </a><br>');
    res.write('<a href="/facebook"> FACEBOOK </a><br>');
    res.write('<a href="/instagram"> INSTAGRAM </a><br>');
    res.write('<a href="/linkedin"> LINKEDIN </a><br>');
    res.write('<a href="/twitter"> WHATSAPP </a><br>');
    res.write('</body>');
    res.write('</html>');
    
    res.end(); // 🔥 VERY IMPORTANTres.end()
}
}

const server = http.createServer(showingHeader)
const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);    
})
