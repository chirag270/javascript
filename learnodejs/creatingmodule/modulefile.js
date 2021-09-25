console.log( "this is the module");


function average(arr){
    sum = 0;
    arr.array.forEach(element => {
        sum += element;        
    });

    return sum/arr.length;

}

module.exports = average;