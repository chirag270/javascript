var http = require("http")
http.createServer(function(req, res) 
            {
             
                // res.end("hello everyone ")


                // 3. [ send a header ]
                res.writeHead( 200, {"content-Type": "text/html"})
                res.end(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title> page in nodejs </title>
                
                
                    <style>
                
                    .container{
                        border: 2px solid red;
                        background-color: aquamarine;
                        padding: 34px;
                        margin: 34px auto;
                        width: 666px;
                    }
                            
                    a{
                        text-decoration: none;
                        color: #12f4f7;
        
                    }
        
                    a:hover{
                        color:aliceblue;
                        background-color: blueviolet;
                        
                    }
        
                    a:visited{
                        background-color: rgb(151, 14, 78);
                    }
        
        
                    a:active{
                        background-color: rgb(3, 65, 145);
                    }
        
                    .btn{
                        font-family: bold;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background-color:  #dfdfdf;
                        padding: 6px;
                        border: none;
                        cursor: pointer;
                        font-size: 15px;
                        border-radius: 4px;
                    }
        
                    .btn:hover{
                        color:fuchsia;
                        /* background-color: rgb(233, 186, 32); */
                        border: 2px solid black;
                    }

                    .navbar{
                        background-color: #4e5859;
                        border-radius: 10px;
            
                    }
            
                    .navbar ul{
                        overflow: auto;
                    }
            
            
                    .navbar li{
                        float: left;
                        list-style: none;
                        margin: 20px 42px;
                    }
                                
                    .navbar li a{
                        padding:  3px 3px;
                        text-decoration: none;
                    }
               
                    .navbar li a:hover{
                        color: red;
                    }
                               
                    .search{
                        float: right;
                        color: blue;
                        padding: 23px 70px;
                    }         
                                  
                
                    </style>
                </head>
                <body>
                    <header>
                         <nav class="navbar">
                            <ul>
                            <li><a href="">Home </a></li>
                            <li><a href="">About </a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Contact us </a></li>
    
                                <div class="search">Search here...</div>
                            </ul>
                         </nav>
                    </header>
                        <div class="container" id="cont1">
                            <h3> Chirag Kumar </h3>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt maiores dicta blanditiis, reprehenderit iure a neque nobis molestiae aliquid veniam voluptates repellat quas quaerat cum, similique culpa. Officia, 
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quae! Debitis modi molestias nemo, commodi ipsa reiciendis itaque, neque dignissimos similique unde sint quo fugit, et at repellendus animi eligendi.
                                <a href="" class="btn">read more..</a>
                                <button class="btn">Contact us </button>                </p>
                            </div>
                        </div>

                        

                        <div class="container" id="cont1">
                                <h3> My Skills </h3>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt maiores dicta blanditiis, reprehenderit iure a neque nobis molestiae aliquid veniam voluptates repellat quas quaerat cum, similique culpa. Officia, 
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quae! Debitis modi molestias nemo, commodi ipsa reiciendis itaque, neque dignissimos similique unde sint quo fugit, et at repellendus animi eligendi.
                                <a href="" class="btn">read more..</a>
                                <button class="btn">Contact us </button>                </p>
                            

                        </div>
                        
                            
                    
                </body>
                </html>`)
        

                
        
}).listen(8080)