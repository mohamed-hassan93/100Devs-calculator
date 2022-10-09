const calculator = {
  displayValue: '',
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
  const {displayValue, waitingForSecondOperand} = calculator;

  if(waitingForSecondOperand === true){
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  }else{
    calculator.displayValue = displayValue === '0'? digit :  displayValue + digit
  }

  console.log(calculator)
}

function inputDecimal(dot){
  if(!calculator.displayValue.includes(dot)){
    calculator.displayValue += dot;
  }
}


function calculate(firstOperand, secondOperand, operator){
  if (operator === '+'){
    return firstOperand + secondOperand
  }else if (operator === '-'){
    return firstOperand - secondOperand
  }else if (operator === 'x'){
    return firstOperand * secondOperand
  }else if (operator === '÷'){
    return firstOperand / secondOperand
  }else{
    return
  }

  return secondOperand
}


function operatorRun(nextOperator){
  const{firstOperand, displayValue, operator} = calculator;

  const inputValue = parseFloat(displayValue);

  if (firstOperand === null && !isNaN(inputValue)){
    calculator.firstOperand = inputValue
  }else if(operator){
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator)
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
    operatorRun(target.innerHTML);
    updateDisplay();
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

