const http = require("http");

console.log("App");
function requestListner(req, res){
    console.log(req.url , req.method ,req.headers );
    
        res.setHeader('Content-Type' , 'text/html')
        res.write('<html>')
        res.write('<head><title>Welcome To Form</title></head>')
        res.write('<body>')
        res.write('<form action="submit-details" method="POST">')
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male" ><br>')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female" ><br>')
        res.write('<input type="submit"  value="submit" ><br>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    
}
const server = http.createServer(requestListner)
const PORT = 3000;

server.listen(PORT , ()=> {
    console.log(`Server running on address http://localhost:${PORT}`);
    
})
