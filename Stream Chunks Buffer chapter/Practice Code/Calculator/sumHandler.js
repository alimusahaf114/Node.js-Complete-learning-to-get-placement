const fs = require('fs')
const sumHandler = (req, res) => {
  const body = [];
  req.on("data", (chunks) => {
    body.push(chunks);
    console.log(chunks);
  });
  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const bodyObj = Object.fromEntries(params)
    let  result = Number(bodyObj.first) + Number(bodyObj.second)
    console.log(result);
    
    // console.log(bodyObj);
    
    // const bodyObject = {};
    // const bodyObject 
    // for (const [key, val] of params.entries()) {
    //   bodyObject[key] = val;
    // }
    // fs.writeFileSync("SumData.txt", JSON.stringify(bodyObject));
    res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Welcome To Form</title></head>");
  res.write("<body>");
  res.write(`<h1> ${result} </h1>`);
  res.write('<a href="/calculator"> Calculator </a>');
  res.write("</body>");
  res.write("</html>");
  return res.end();
});
  
};

module.exports = sumHandler;
