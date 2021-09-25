// TODO: understanding the context in javascript 

// understand how the global context work in javascript

sayhello()      // how it is happend 

                // function is call before the declare


function sayhello(){
    console.log("hello world");

}


// 


if (2 == "2"){
    console.log("this is true");
}


var myName = "chirag";
if ( myName === myName){
    console.log("this is again be true");
}

// var myName = "chirag";
// if ( myName === window.myName){ //window is not defined 
//     console.log("this is now not become again be true");
// }