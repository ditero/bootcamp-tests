function isFromBellville(regNum){
  var regNumber = regNum.startsWith('CY');
  console.log(regNumber);
  return regNumber;
}
isFromBellville('CY 354 875');
