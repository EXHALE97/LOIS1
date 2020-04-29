/**
	* Автор Феденко Е.С.
	*/
function generateFormula() {
    document.getElementById("EnterFormula").value = "";
    let number = rand(1,10);
    let symbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let negation = "!";
    let binaryOperation = ["&","|"];
    let openingBracket = "(";
    let closingBracket = ")";
    let index = rand(0,symbol.length);
    let formula = symbol[index];
    for (let iteration = 0 ; iteration < number ; iteration++){
        index = rand(0,2);
        if (index===0){
            do {
                index = rand(0, formula.length);
            }while(!symbol.includes(formula[index]));
            formula = formula.substr(0,index) +
                openingBracket + formula[index] + binaryOperation[rand(0,binaryOperation.length)] +
                symbol[rand(0,symbol.length)] + closingBracket + formula.substr(index+1, formula.length);
        }
        else {
            do {
                index = rand(0, formula.length);
            }while(!symbol.includes(formula[index]));
            formula = formula.substr(0,index) + openingBracket + negation +  formula[index]  + closingBracket +
                formula.substr(index+1, formula.length);
        }
    }

    formula = rand(0, 2) === 0 ? trySpoilFormula(formula) : formula;
    document.getElementById("EnterFormula").value = formula;
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function trySpoilFormula(formula) {
    let index = rand(0, formula.length);
    return formula.substr(0,index)+formula.substr(index+1, formula.length);

}
