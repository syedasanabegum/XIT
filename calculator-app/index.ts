interface Operation {
    calculate(a: number, b: number): number;
  }
  
  class Addition implements Operation {
    calculate(a: number, b: number) {
      return a + b;
    }
  }
  
  class Subtraction implements Operation {
    calculate(a: number, b: number) {
      return a - b;
    }
  }
  
  class Multiplication implements Operation {
    calculate(a: number, b: number) {
      return a * b;
    }
  }
  
  class Division implements Operation {
    calculate(a: number, b: number) {
      return a / b;
    }
  }
  
  class Calculator {
    private operandAInput: HTMLInputElement;
    private operandBInput: HTMLInputElement;
    private operationSelect: HTMLSelectElement;
    private resultDisplay: HTMLParagraphElement;
  
    constructor() {
      this.operandAInput = document.getElementById('operandA') as HTMLInputElement;
      this.operandBInput = document.getElementById('operandB') as HTMLInputElement;
      this.operationSelect = document.getElementById('operation') as HTMLSelectElement;
      this.resultDisplay = document.getElementById('result') as HTMLParagraphElement;
  
      this.setupFormSubmitHandler();
    }
  
    private setupFormSubmitHandler() {
      const form = document.querySelector('.calculator-form') as HTMLFormElement;
      form.addEventListener('submit', this.handleFormSubmit.bind(this));
    }
  
    private handleFormSubmit(event: Event) {
      event.preventDefault();
  
      const operandA = parseFloat(this.operandAInput.value);
      const operandB = parseFloat(this.operandBInput.value);
      const operation = this.operationSelect.value;
  
      let result: number;
  
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
    }
  
    private displayResult(result: number) {
      this.resultDisplay.textContent = result.toString();
    }
  }
  
  const calculator = new Calculator();
  