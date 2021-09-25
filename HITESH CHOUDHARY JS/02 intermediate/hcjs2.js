// TODO: fUNCTION IN VARIABLE



//  role of user in javascript

/* Define a function that can answer the role of user.

    A user can be on following roles;
    admin - with all acess;
    subadmin - acces to create and delete / courses
    testperp - access to create and delete tests
    user - consume all content
    other - trail user


input: getUserRole(name, role)

*/


// declare a function



function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; //this is not neccesary

        case "subadmin":
            return `${name} is sub-admin acess to delete and create courses`
            break;

        case "testprep":
            return `${name} is test-prep access with to delete and create tests `
            break;
        case "user":
            return `${name} is a user to consume content`
            break;
       
        default:
            return `${name} is admin access with to delete and create tests `
            break;
    }
}

console.log(getUserRole("hitesh", "testprep"));

console.log("-----------------------------------------")
var getRole = getUserRole("sammy", "user");
console.log(getRole)



console.log("-----------------------------------------")
console.log("You can also create an function inside an variable")
var  getUserRole2 = function (name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; //this is not neccesary

        case "subadmin":
            return `${name} is sub-admin acess to delete and create courses`
            break;

        case "testprep":
            return `${name} is test-prep access with to delete and create tests `
            break;
        case "user":
            return `${name} is a user to consume content`
            break;
       
        default:
            return `${name} is admin access with to delete and create tests `
            break;
    }
}

console.log(getUserRole2("hitesh", "testprep"));
console.log("-----------------------------------------")
var getRole = getUserRole("sammy", "user");
console.log(getRole)
