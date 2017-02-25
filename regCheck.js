function regCheck(regNum, regLoc){
  var regNumber = regNum.endsWith(regLoc)
  return regNumber;
}
var isGP = regCheck('DV 23 NB GP', 'GP');

//should print true
console.log(isGP);

var isMP = regCheck('DV 23 LP GP', 'MP');
//should print false
console.log(isMP);
