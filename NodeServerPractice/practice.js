const http = require('http')


function handleRequests(req , res){
    if(req.url == "/"){
        res.setHeader('Content-Type' , 'text/html')
        res.write('<html>')
        res.write('<head><title>Welcome To Form</title></head>')
        res.write('<body>')
        res.write('<form action="submit-details" method="POST">')
        res.write('<h1></h1>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
    }else if(req.url == "/home"){
        res.setHeader('Content-Type' , 'text/html')
        res.write('<html>')
        res.write('<head><title>Welcome To Form</title></head>')
        res.write('<body>')
        res.write('<form action="submit-details" method="POST">')
        res.write('<h1>Dear Musahaf this is Home</h1>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    }else if(req.url == "/blog"){
        res.setHeader('Content-Type' , 'text/html')
        res.write('<html>')
        res.write('<head><title>Welcome To Form</title></head>')
        res.write('<body>')
        res.write('<form action="submit-details" method="POST">')
        res.write('<h1>Dear Musahaf this is Blog</h1>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        res.end()
}else {
        res.setHeader('Content-Type' , 'text/html')
        res.write('<html>')
        res.write('<head><title>Welcome To Form</title></head>')
        res.write('<body>')
        res.write('<form action="submit-details" method="POST">')
        res.write('<h1 >Dear Musahaf this is Error</h1>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        res.end()
} 
}

const server = http.createServer(handleRequests)
const PORT = 3000;
server.listen(PORT , ()=>{
console.log(`Server is Listening at http://localhost:${PORT}`);

})