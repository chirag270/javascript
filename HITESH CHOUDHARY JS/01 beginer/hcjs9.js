// TODO: switch For role based acces in javascript


        //  create an application with following role


        //  admin    - gets full acess
        //  subadmin - gets access to create and delete courses
        //  testprep - gets access to create delete tests
        //  user     - gets  acess to consume content


var user = "testprep";
// change the value of user to { admin, subadmin, testprep, user}


switch (user) {
    case "admin":
        console.log("You Get Access the full Access");     
        break;
    case "subadmin":
        console.log("gets access to create and delete courses")     
        break;
    case "testprep":
        console.log("gets access to create delete tests");     
        break;
    case "user":
        console.log("user access to consume content");     
        break;

    default:
        console.log("you are a tral User")
        break;
}