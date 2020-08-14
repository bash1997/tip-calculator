var tipFunction = function() {
  var subTotal = document.getElementById("subtotal").value;
  var serviceValue = document.getElementById("service").value;
  var tip = subTotal *(serviceValue/100);
  var tipFixed = tip.toFixed(2);

  var people = document.getElementById("people").value;
  var perBill = tip / people;
  var perBillFixed = perBill.toFixed(2);


  document.getElementById("totalTip").innerText = tipFixed;
  if (people == 0) {
    document.getElementById("perPerson").innerText = tipFixed;
  } else {
    document.getElementById("perPerson").innerText = perBillFixed;
  }
  document.getElementById("result").style.display = "block";

 };

document.getElementById("buttonClick").addEventListener("click", tipFunction);
