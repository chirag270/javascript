//  TODO: Operaator in javascripts

// calculate disscount



//  how to calculate disscountS
// d = (least price - sale price)/ lidting price * 100


var sellingprice = 199;
var listingPrice = 799;
var disscountPercent = ((listingPrice- sellingprice) / listingPrice) * 100;

console.log("dissount price is :     " + disscountPercent);

//  dont display whole floating number

var displaydissCountPercentage = Math.round(disscountPercent);

console.log("Disscount Withput Float number is         " + displaydissCountPercentage+ "% off");