const fs = require("fs");

//  reading the file
let text = fs.readFileSync("module.txt", "utf8" );


//  replace in the variable
text = text.replace("know", "mow")
// this is creating the new file
fs.writeFileSync("created.txt", text)






console.log(' this is the file of content');
console.log(text);