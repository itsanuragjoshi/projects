// Variable Declartions
const allKeys = document.querySelectorAll('.key');

const displayLog = document.querySelector('#displayLog');
const displayTotal = document.querySelector('#displayTotal');

let string = "";
let lastKey = "";
let operatorKeys = "+-*/";


allKeys.forEach(key => {
    // Add listeners to all keys
    key.addEventListener('click', () => {
        const keyValue = key.getAttribute('data-value');

        // OPERATOR Key(+ - * /) is pressed
        if (operatorKeys.includes(keyValue)) {


            if (operatorKeys.includes(lastKey)) {

                // Replace the last operator with a new operator
                string = string.slice(0, -1);
                string += keyValue;
                displayLog.innerText = string;
                return; // Don't evaluate if an operator is pressed after another operator

            }
            string += keyValue; // Appends the `keyvalue` to `string`
            displayLog.innerText = string;
            displayTotal.innerText = "";
        }

        // CLEAR Key is pressed
        else if (keyValue === 'clr') {

            string = string.slice(0, -1);
            displayLog.innerText = string;
            let statusCompute = compute(string);

            if (statusCompute === "error" || string === "") {
                displayTotal.innerText = "";
            }
            else {
                displayTotal.innerText = statusCompute;
            }
        }

        // CLEARALL Key is pressed
        else if (keyValue === 'clrAll') {
            displayLog.innerText = "";
            displayTotal.innerText = "";
            string = "";
        }

        // RESULT Key is pressed
        else if (keyValue === 'res') {
            displayLog.innerText = string;

            // Copies result from line 2 to line 1
            if (displayTotal.innerText != "") {
                displayLog.innerText = displayTotal.innerText;
                string = displayTotal.innerText;
            }
        }

        //OPERAND key is pressed
        else {
            string += keyValue; // Appends the `keyvalue` to `string`
            displayLog.innerText = string;
            displayTotal.innerText = compute(string);
        }

        lastKey = string.at(-1); // Track the last key pressed
    });
});


// Evaluates a JS string and returns its completion value. If the completion value is empty, `undefined` is returned. 
function compute(expression) {
    try {
        // expression = expression.replace('%', '/100');
        return eval(expression);
    }
    catch (error) { // Handle any evaluation errors here
        return 'error';
    }
}