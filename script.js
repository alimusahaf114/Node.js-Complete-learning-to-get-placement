console.log("Hey this is my first program ");
const fs = require('fs')
fs.writeFile('ali.text', "Hello Musahaf" , (err)=> {
    if(err) console.log("Error has Arrived");
    else console.log("No error");
    
    
})