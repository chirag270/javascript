var fsRefference = require("fs")
fsRefference.readFile("index.js", "utf8", function(err, data){
    //  printing tha data 
    console.log("this is the content of the file " + data );
})


fsRefference.writeFile("writtenfile.js", "console.log('done')", function(err){

    //  writing the data here 
    console.log(" data is been added ");

})

//  appending the data into the file { at the last }
fsRefference.appendFile("index.js", "console.log('this the data to be appended again ')", function(err){

    //  writing the data here 
    console.log(" data is been added ");

})



//  deleting the file 
//  ++ fsRefference.unlink("index.js",  function(err){

    // deleting the file 
    // ++ console.log(" the file has bee succesfull deleted  ");

// })



