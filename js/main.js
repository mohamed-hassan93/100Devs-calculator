const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
}

function updateDisplay(){
  document.querySelector('.functionKey').value = calculator.displayValue
}

updateDisplay()