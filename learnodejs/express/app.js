
//  first install module 
const { response } = require("express");
const expressRefference  = require("express");


const app = expressRefference();



//  concept of routing 


//  rounting 1
app.get("/", function(req, res){
    res.send(" Hello World")
})

//  rounting 2
app.get("/alien", function(req, res){
    const id = req.query.id
    res.send(" Welcome back aliens "  + id)

})

// routing 3
app.get("/alien/20", function(req, res){
    res.send(" Hey Navin sir ")
})



// routing 4
app.get("/alien/:id", function(req, res){
    const id = req.params.id
    res.send(" Hey Navin sir ")
})



// routing 5
app.get("/chirag", function(req, res){
    res.send(" hii this is chirag and aim here  ")
})


//  routing 6  [ not successedd ]
app.get("/static", function(req, res){
    res.send("index.html")
})


//  now server is started 
app.listen(8080, function(req, res){
    console.log("Running.... ");
});
