//  serving html files for the user 
const http = require("http");

const fs = require("fs");


//  this is the blocking file
const filecontent = fs.readFileSync("ossum.html")

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html"})
    res.end(filecontent);

    
}).listen(8080)
