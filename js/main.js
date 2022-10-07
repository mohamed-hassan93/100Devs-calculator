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
updateDisplay();

function inputDigits (digit){
  const {displayValue} = calculator;

  calculator.displayValue = displayValue === '0'? digit :  displayValue + digit
}

function inputDecimal(dot){
  if(!calculator.displayValue.includes(dot)){
    calculator.displayValue += dot;
  }
}


function operatorRun(nextOperator){
  const{firstOperand, displayValue, operator} = calculator
}
const keys = document.querySelector('.buttons');
keys.addEventListener('click', (event) => {
  const {target} = event;

  if(target.classList.contains('digit')){
    console.log('digit', target.innerHTML);
    inputDigits(target.innerHTML);
    updateDisplay();
    return;
  } else if(target.classList.contains('operator')){
    console.log('operator', target.innerHTML);
    return;
  } else if(target.classList.contains('allClear')){
    console.log('clear', target.innerHTML);
    return;
  } else if(target.classList.contains('decimal')){
    console.log('decimal', target.innerHTML);
    inputDecimal(target.innerHTML);
    updateDisplay();
    return;
  } else {
    return;
  }
});

