const http = require("http")
const fs = require("fs");



const hostname = "127.0.0.1";
const port = 8080;

// hyper links 
//  here these files are ready to read 
const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
const services = fs.readFileSync("./services.html");
const contact = fs.readFileSync("./contact.html");



//  this is the serving file using { blocking sync method }


const server = http.createServer((req, res)=>{

        console.log(req.url);

        url = req.url;


        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");



        //  here logic are written 
        if(url == "/"){
            res.end(home);
        }
        else if(url == "/about"){
            res.end(about);
        }

        else if(url == "/services"){
            res.end(services);
        }
        else if(url == "/contact"){
            res.end(contact);
        }
        else{
            res.statusCode= 404;
            res.end("<h1>404 not found</h1>");
        }
        
});



server.listen(port, hostname, () =>{
    console.log(`running at http://${hostname}:${port}/`);
});
