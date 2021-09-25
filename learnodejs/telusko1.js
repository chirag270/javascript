console.log(" hello this is shirag and i am know about that it is ");

console.log(" ++++++++++++  ------------------         ++++++++++");



var a = 7;
var b = 22;
var c = a +b ;
console.log(" the sum of two number is " + c);


console.log(" ++++++++++++  ------------------         ++++++++++");


//  create a server for for you 
var http = require("http")
http.createServer(function(req, res) 
            {
                //1. 
                // res.write("  Welcome back Aliens ")
                // res.end()

                //  2.
                res.end("hello everyone ")

                // // 3. [ send a header ]
                // res.writeHead( 200, {"content-Type": "text/html"})
                // res.end()
        
}).listen(8080)