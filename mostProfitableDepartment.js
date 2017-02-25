function mostProfitableDepartment(profDept){
  //con.log(profDept);
  var deptObj = {hardware:0,outdoor:0,carpentry:0, electronics:0};
  var finalDept = {};

  for(var prop in profDept){
    var listDept =profDept[prop];
    var dptName = listDept.deptName;

   //var itemPrice = priceMap[itemName];
    if(profDept[prop].department === 'hardware'){
      deptObj.hardware+= profDept[prop].sales;
    }
    else if(profDept[prop].department === 'outdoor'){
      deptObj.outdoor+= profDept[prop].sales;
    }
    else if(profDept[prop].department === 'carpentry'){
      deptObj.carpentry+= profDept[prop].sales;
    }
      else if(profDept[prop].department === 'electronics'){
      deptObj.electronics+= profDept[prop].sales;
    }

  }
