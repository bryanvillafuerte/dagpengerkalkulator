import { gFactor2020 } from "../constants/amountG";
import { G2020 } from "../constants/amountG";

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
    var maxG = Math.round(G2020 * 6);
    var overG = Math.round(maxG / 260);

    var dailyAmount = Math.round(gAmount / 260);

    var currentSats = gAmount;

    if ( currentSats > G2020 && currentSats < 600000 ) {
      var newText = document.createTextNode("Du får innvilget dagpenger.");
      var diaTitle = document.getElementById("rightResult");
      diaTitle.appendChild(newText);

      var dailyText = document.createTextNode("Du skal få " + dailyAmount + " kroner per dag før skatt.")
      var dailyTitle = document.getElementById("dailyResult");
      dailyTitle.appendChild(dailyText);
    } else if ( currentSats >= 600000 ) {
      var newText2 = document.createTextNode("Du får innvilget dagpenger.");
      var diaTitle2 = document.getElementById("rightResult");
      diaTitle2.appendChild(newText2);

      var dailyText2 = document.createTextNode("Du skal få " + overG + " kroner per dag før skatt.")
      var dailyTitle2 = document.getElementById("dailyResult");
      dailyTitle2.appendChild(dailyText2);

      var maxGtext = document.createTextNode("Foreldrepengene dine er fastsatt til " + maxG + " kroner i året, som er seks ganger grunnbeløpet i folketrydgen. Du tjener mer enn dette, men du får ikke foreldrepenger for den delen av inntekten som overstiger seks ganger grunnbeløpet.")
      var maxGcontent = document.getElementById("maxGtext");
      maxGcontent.appendChild(maxGtext);
    } else {
      var newText3 = document.createTextNode("Du har desverre ingen rett til dagpenger.");
      var diaTitle3 = document.getElementById("rightResult");
      diaTitle3.appendChild(newText3);
    }
}