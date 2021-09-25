// TODO: CODE HOISTING IN JAVASCRIPT


// how these context works


/*
two types of context are there
        1. global
        2. executing right now
*/

/*
// Exectution content
        1. varable Object
        2. Scope chain 
        3. this

*/


// function declared are scanned and made available
// variable declariation are sccaned and made undefined



function tipper(a){

    var bill = a;
    //  you use
    var bill = parseInt(a); // but not in production
    console.log( bill + 5);
}

// calling the function

tipper(5);

//  what happend if
tipper("5"); //it becomes 55 



//  another tyoe of function

// you can also call here



bigTipper("85")

function bigTipper(a){
    var billb = parseInt(a);
    console.log("this is the bigTipper" );
    console.log(billb + 15);
}


// we can also write these function

// bigTipper("85")         // error bigTipper is not a function any more

// var bigTipper = function(a){
//     var billb = parseInt(a);
//     console.log("this is the bigTipper and changed" );
//     console.log(billb + 15);

// }



//  important things is 
            //  variable declartaion are scanned and made undefined
            //  now prove it



console.log(name);   // right now it's now variable is declared and but made it undefined
var name = "Chirag";

console.log("========================================================");

function sayName(){
    var name = "Mr. chirag";
    console.log(name);
}
sayName();  // and it's know only about inside a function 
            // and doesn't care about outside the function 
            // he pints "Mr. Chirag"

console.log(name);