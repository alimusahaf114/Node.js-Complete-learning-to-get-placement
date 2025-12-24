const http = require('http')


function showingHeader(req , res){
console.log(req);
res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title>Links</title></head>');
    res.write('<body>');
    res.write('<a href="/"> HOME </a><br>');
    res.write('<a href="https://facebook.com"> FACEBOOK </a><br>');
    res.write('<a href="https://instagram.com"> INSTAGRAM </a><br>');
    res.write('<a href="https://linkedin.com"> LINKEDIN </a><br>');
    res.write('<a href="https://whatsapp.com"> WHATSAPP </a><br>');
    res.write('</body>');
    res.write('</html>');

    res.end(); // 🔥 VERY IMPORTANTres.end()
}

const server = http.createServer(showingHeader)
const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);    
})
