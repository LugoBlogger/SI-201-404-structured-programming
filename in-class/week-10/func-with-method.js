let calculator = {
  operand1: 1,
  operand2: 1,

  add() {
    this.result = this.operand1 + this.operand2;
    // calculator.result = calculator.operand1 + calculator.operand2;
  }
}

calculator.operand1 = 5;
calculator.operand2 = 7;

// calculator.add();
console.log(calculator.result);
