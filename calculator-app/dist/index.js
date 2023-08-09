var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.calculate = function (a, b) {
        return a + b;
    };
    return Addition;
}());
var Subtraction = /** @class */ (function () {
    function Subtraction() {
    }
    Subtraction.prototype.calculate = function (a, b) {
        return a - b;
    };
    return Subtraction;
}());
var Multiplication = /** @class */ (function () {
    function Multiplication() {
    }
    Multiplication.prototype.calculate = function (a, b) {
        return a * b;
    };
    return Multiplication;
}());
var Division = /** @class */ (function () {
    function Division() {
    }
    Division.prototype.calculate = function (a, b) {
        return a / b;
    };
    return Division;
}());
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.operandAInput = document.getElementById('operandA');
        this.operandBInput = document.getElementById('operandB');
        this.operationSelect = document.getElementById('operation');
        this.resultDisplay = document.getElementById('result');
        this.setupFormSubmitHandler();
    }
    Calculator.prototype.setupFormSubmitHandler = function () {
        var form = document.querySelector('.calculator-form');
        form.addEventListener('submit', this.handleFormSubmit.bind(this));
    };
    Calculator.prototype.handleFormSubmit = function (event) {
        event.preventDefault();
        var operandA = parseFloat(this.operandAInput.value);
        var operandB = parseFloat(this.operandBInput.value);
        var operation = this.operationSelect.value;
        var result;
        switch (operation) {
            case 'add':
                result = new Addition().calculate(operandA, operandB);
                break;
            case 'sub':
                result = new Subtraction().calculate(operandA, operandB);
                break;
            case 'mul':
                result = new Multiplication().calculate(operandA, operandB);
                break;
            case 'div':
                result = new Division().calculate(operandA, operandB);
                break;
            default:
                result = 0;
                break;
        }
        this.displayResult(result);
    };
    Calculator.prototype.displayResult = function (result) {
        this.resultDisplay.textContent = result.toString();
    };
    return Calculator;
}());
var calculator = new Calculator();
