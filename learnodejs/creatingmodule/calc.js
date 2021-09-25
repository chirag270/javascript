//  creating a function  for creating a module in ( creatingmodule.js)
function add(a,b){
    return a+b
}


//  for using a function outside this file
module.exports.add  = add


// what if you have multiple function

function sub(a,b){
    return a-b
}

module.exports.sub = sub

//  also can use

//  exports.functionName = functionName