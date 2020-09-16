import { gFactor2020 } from "../constants/amountG";

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
    
    return gAmount;
}