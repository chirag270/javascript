//  Our first User Sign up

const uid = "abc123";

//  this is not allowed in javaScript
        //  uid = "abcd234";
//  eventually you cant update in after you already assigned a constant


var fullName = "Hitesh Choudhary";
var email = "hiteshchoudhary.dev";
var password = "123456";
var confirmPassoword = "123455";
var courseCount = 0;
var isLoggedInFromGoogle = false;


// fullName = prompt("Enter your name")


console.log("user id is -->                                 " + uid)
console.log("user Full name is -->                          " + fullName);
console.log("user Email id is -->                           " + email);
console.log("user Password is -->                           " + password);
console.log("Confirm User Password is -->                   " + confirmPassoword);
console.log("Count Toatla Numbar of Courses -->             " +courseCount);
console.log("Check is User logged in From Google -->        "+ isLoggedInFromGoogle);


//  pettern                     
console.log("|                                                              |");
console.log("|                                                              |");
console.log("|                                                              |");
console.log("|                                                              |");
console.log("+                                                              +");
console.log("+                                                              +");
console.log("----------------------------------------------------------------");



//  another way to print data 
console.log(`
        with Unique id : ${uid}
        User id : ${fullName}
        and his Email is : ${email}
        and uses the Password : ${password}
`)