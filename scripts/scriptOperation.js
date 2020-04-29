function clickCheckFormula() {
    var inputFormula = document.getElementById("inputFormula").value;
    var output = document.getElementById("output");
    var outputTypeFormula = document.getElementById("outputTypeFormula");
	if (inputFormula == ""){
	  output.innerHTML = "Строка пустая";
  } else if (verificationFormula(inputFormula)) {
        document.getElementById("hiddenForm").hidden = false;
          output.innerHTML = "Данное выражение является формулой";
      } else {
         document.getElementById("hiddenForm").hidden = true;
          output.innerHTML = "Данное выражение не является формулой";
      }
}
// Функции для тестов
  function clickYes() {
  var outputResult = document.getElementById("outputResult");
  var enterFormula = document.getElementById("EnterFormula").value;
  if (enterFormula == ""){
	  outputResult.innerHTML = "Строка пустая";
  } else if (verificationFormula(enterFormula)) {
      outputResult.innerHTML = "Верно";
      } else {
      outputResult.innerHTML = "Неверно";
      }

  }

  function clickNo() {
    var outputResult = document.getElementById("outputResult");
    var enterFormula = document.getElementById("EnterFormula").value;
	if (enterFormula == ""){
	  outputResult.innerHTML = "Строка пустая";
  } else if (verificationFormula(enterFormula)) {
        outputResult.innerHTML = "Неверно";
        } else {
        outputResult.innerHTML = "Верно";
        }
  }
