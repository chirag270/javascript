const http = require("http");
const fs = require("fs");


const hostname = "127.0.0.1";
const port = 8081;



// seving files 
//  these are hyper links to serve peopple
const home = fs.readFileSync("./index.html");
const skill = fs.readFileSync("./skill.html");
const project = fs.readFileSync("./project.html");
const reachMe = fs.readFileSync("./reachMe.html");
const blog = fs.readFileSync("./blog.html");


// for black theme
const blacktheme = fs.readFileSync("./blacktheme.html")



//  creaing server of my app
const server =  http.createServer((req, res) =>{
    console.log(req.url);
    url = req.url;


    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    //  write logic here

    if(url == "/"){

        //  it helps to display resprective file
        res.end(home);

    }

    else if(url== "/skill"){
        res.end(skill);
    }

    else if(url== "/project"){
        res.end(project);
    }

    else if(url== "/reachMe"){
        res.end(reachMe);
    }

    else if(url== "/blog"){
        res.end(blog);
    }


    // for black theme
    else if(url== "/blacktheme"){
        res.end(blacktheme);
    }

    else{
        res.statusCode= 404;
        res.end("<h1>404 not found</h1>");
    }
    


    
})


server.listen(port, hostname, () =>{
    console.log(`Running at server--->  http://${hostname}:${port}/`)
})