function countRegNumber(myList){
  var crNum = myList.split(",");
 	console.log(" "+crNum);
	var crLength = crNum.length;
  return crLength;
}
var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3)
