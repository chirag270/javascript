// TODO: Ternary Operator in javascript

// show user to sign up button
// other wise show him to signup or login option 


var authenticated = true;


// way 1

//  condition ternary opeartor

authenticated ? console.log("Signout button "): console.log("Loggin ");


//  way 2
if (authenticated){
    console.log("Show Signed Out button");

}

else{
    console.log("show login option ")
}

