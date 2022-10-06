const calculator = {
  displayValue: 0,
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};



function updateDisplay(){
  const displayScreen = document.querySelector('.functionalSpace');

  displayScreen.innerHTML = calculator.displayValue
}

updateDisplay()


