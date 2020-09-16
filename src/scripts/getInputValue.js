import { G2020, gFactor2020 } from "../constants/amountG";

export function getInputValue() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;

  var value1 = parseInt(input1)
  var value2 = parseInt(input2)
  var value3 = parseInt(input3)

  var allInput = [value1, value2, value3]

  var totalInput = 0;
  for(var i = 0; i < allInput.length; i++){
    totalInput += allInput[i]
  }

  var averageInput = totalInput / allInput.length;

  var gAmount = averageInput * gFactor2020;

  if (gAmount > G2020) {
    var positiveAlert = document.createElement("span");
    var positivetext = document.createTextNode("Du har krav for dagpenger.");
    positiveAlert.appendChild(positivetext);

    var positiveTitle = document.getElementById("dialogTitle");
    positiveTitle.appendChild(positiveAlert);
  } else {
    var negativeAlert = document.createElement("span");
    var negativeText = document.createTextNode("Du har desverre ikke noe krav for dagpenger.");
    negativeAlert.appendChild(negativeText);

    var negativeTitle = document.getElementById("dialogTitle");
    negativeTitle.appendChild(negativeAlert);
  }
}