//  TODO: logical conditions in javascripts



var email = true;
var facebook = false;
var google = false;


// way 1

//  clean code readblecode
if(email || facebook || google){
    console.log("Loggin succesFull")
}

console.log("here start from way 2  write logic")















//  way 2

if (email == false){
    console.log("Yeah , ok you are From email");
}

else if(facebook ==  true){
    console.log("Yeah , ok you are From Facebook");

}

else{
    console.log("Yeah , ok you are From google");
}
