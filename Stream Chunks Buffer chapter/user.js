const http = require("http");
const fs = require("fs")
console.log("App");
function requestListner(req, res){
    console.log(req.url , req.method ,req.headers );
    if(req.url === "/"){
         
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
    } else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
        const body = []
        
        req.on("data" , (chunks)=>{
            console.log(chunks);
            body.push(chunks)
        })
        req.on('end' , ()=>{
            const fullBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(fullBody);
            // const bodyObject = {}
            // for(const [key,val] of params.entries()){
            //     bodyObject[key] = val
            // }
            const bodyObject = Object.fromEntries(params)
    
            console.log(bodyObject);
            

            fs.writeFileSync("Musahaf.txt" , JSON.stringify(bodyObject))
        })
        res.statusCode = 302;
        res.setHeader('location' , '/');
        return res.end()
    } else {
        res.statusCode = 404;
       res.end("Page Not Found");
    }
    
}
const server = http.createServer(requestListner)
const PORT = 3000;

server.listen(PORT , ()=> {
    console.log(`Server running on address http://localhost:${PORT}`);
    
})
