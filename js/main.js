//Carosel Ride Counter

/*for (let carosel=0; carosel<=10; carosel++){
    console.log(`the carosel is on spin number ${carosel}`)
}

/*Parity 
Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}
This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

This program must show exactly 10 numbers including the first one, not 11 numbers!
*/

/*for (let i=1; i<=20; i++){
    if (i%2!==0){
        console.log(`${i} is odd`)
    }
}*/

/* Input validation
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.
*/

/*let nb1 = Number(prompt('Enter nb1:'));
let nb2 = Number(prompt('Enter nb2:'));
let nb3 = Number(prompt('Enter nb3:'));

if (nb1>nb2){
  nb1 = nb3*2;
} else {
  nb1++;
  if (nb2>nb3){
    nb1 += nb3*3;
  }else{
    nb1 = 0;
    nb3 = nb3*2+nb2;
  }
}

console.log(nb1, nb2, nb3);*/

/*let month = Number(prompt('Enter the month in XX format:'))

if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ){
  console.log('This month has 31 Days!')
} else if(month === 2){
  console.log('This month has 28 days')
}else{
  console.log('This month has 30 days!')
}*/

/*Following second
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s => 14h18m0s
6h59m59s => 7h0m0s
23h59m59s => 0h0m0s (midnight)*/

/*let hours = Number(prompt("Hours?"));
let minutes = Number(prompt("Minutes?"));
let seconds = Number(prompt("seconds?"));

if (seconds<59 && seconds>=0){
  seconds=seconds+1;
}else if(seconds=59){
  seconds = 00;
  if (minutes < 59 && minutes>=0){
    minutes = minutes + 1;
  }else if(minutes = 59){
    minutes = 00;
    if (hours>=00 && hours<=24){
      hours = hours+1
    }else {
      console.log("This hours input is not valid");
    }
  }else{
    console.log("This minutes input is not valid")
  }
}else{
  console.log('This seconds input is not valid')
}

console.log(`The new time is ${hours}:${minutes}:${seconds}`)*/


/*let num = 2
while (num <=10){
  console.log(num++);
  num++;
}*/

/* Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user.*/

/*let carosel = 1;

while(carosel<=10){
  console.log(`the carosel spun ${carosel} times`);
  carosel++
}*/

/*let carosel = 10;

for(i=1; i<=carosel; i++){
  console.log(`the carosel spun ${i} times`);
}*/

/*let num = Number(prompt('Input number of carosel spins'))

for (i=1; i<= num; i++){
  console.log( `the number of carosel spins is ${i}`)
}


let numb = Number(prompt('Input number of carosel spins'))
let car = 1

while (car <= numb){
  console.log( `the number of carosel spins is ${car}`);
  car++;
}

Parity
Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}
This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

This program must show exactly 10 numbers including the first one, not 11 numbers!

*/

/*let num = Number(prompt('input a number:'));

for (let i = 1; i <= 10; i++) {
  if (num % 2 !== 0) {
    console.log(`${num} is odd`);
    num++;
  } else{
    console.log(`${num} is even`);
    num++
  }
}

Input validation
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.

*/


/*let num = Number(prompt('Input a number less than 100'));

for(i=1;i<=num; i++){
  if (num<=100 && num>=50){
    console.log(`${num} is the Correct Entry`)
  }else{
    num = Number(prompt('Input a number less than 100'));
    if (num<=100 && num>=50){
      console.log(`${num} is a Correct Entry`)
    }else{
      console.log(`${num} does not meet the requirement`);
  }
}
}

Multiplication table
Write a program that asks the user for a number, then shows the multiplication table for this number.

When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
*/

/*let num = Number(prompt("input a number"));

for (i=0; i<=12; i++){
  console.log(`${num} * ${i} = ${num*i}`);
}*/

/*let num = Number(prompt("input a number"));

for (i=0; i<=12; i++){
  if(num>=2 && num<=9){
    console.log(`${num} * ${i} = ${num*i}`);
  }else{
    num = Number(prompt("input a number"));
    if(num>=2 && num<=9){
      console.log(`${num} * ${i} = ${num*i}`);
    }else{
      num = Number(prompt("input a number"));
    }
  }
}

Neither yes nor no
Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let endGame = prompt('Enter a word');

for(i=1; i<=100; i++){
  if (endGame == 'yes'|| endGame == 'no'){
    console.log("End of Game")
  }else{
    endGame = prompt('Enter a word');
  }
}

FizzBuzz
Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.



for (i=1; i<=100; i++){
  if (i%3 === 0){
    console.log('FIZZ');
  }else if(i%5 === 0 && i%3 !== 0){
    console.log('BUZZ-BUZZZZZZ');
  }else{
    console.log(`Number: ${i}`);
  }
}

console.log(Math.pow(2,3))

console.log(Math.random(1,1000))

---------------------------------------------------------------------

Coding time!
Improved hello
Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}*/

/* TODO: ask user for first and last name
// TODO: call sayHello() and show its result
Number squaring
Complete the following program so that the square1() and square2() functions work properly.*/


/*function sayHello(firstName, lastName) {
  firstName = prompt('Input your first name:');
  lastName = prompt('Input your last name:');
  const message = `Hello, ${firstName} ${lastName}!`;
  console.log(message);
}

sayHello(); */


/* Square the given number x
function square1(x) {
  // TODO: complete the function code
}


// Square the given number x
const square2 = x => // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
When it's done, update the program so that it shows the square of every number between 0 and 10.

Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don't you? ;)*/


/*function square1(x){
  for (i=1; i<=10; i++){

    console.log(Math.pow(i,2));

  }
  //x = Number(prompt('Input a Number:')); 
}

square1();

/*
Minimum of two numbers
Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.*/

/*function minNum(num1,num2){
  num1 = Number(prompt('Input number 1:'));
  num2 = Number(prompt('Input number 2:'));
  if (num1>num2){
    console.log(num2);
  }else{
    console.log(num1)
  }
}

minNum();

 TODO: write the min() function

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1
Calculator
Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

*/ 

/*

function arithmeticVal(num1,operatorVal,num2){

  if (operatorVal === '+'){
    console.log(num1+num2)
  }else if (operatorVal === '-'){
    console.log(num1-num2);
  }else if (operatorVal === '*'){
    console.log(num1*num2);
  }else if (operatorVal === '/'){
    console.log(num1/num2);
  }else{
    console.log('unrecognized operator')
  }
}

arithmeticVal(5,'+',4);
arithmeticVal(4,'-',6);
arithmeticVal(2,'*',0);
arithmeticVal(12,'/',0);

*/


/*TODO: complete program

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity


Circumference and area of a circle
Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

Here are some tips for solving this exercise:

Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
The value of number π (Pi) is obtained with Math.PI in JavaScript.
You might want to use the exponentiation operator ** to perform computations.
console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3



function circumferenceOfCircle(radius){
  radius = Number(prompt('Input radius of circle you are trying to calculate: '));
  let circ = radius*2*Math.PI;

  console.log(circ);

}

circumferenceOfCircle();*/

// var myObject = {
//   name: 'Object',
//   size: '100 lbs',
//   age: 12,
// }

// alert(`the age of the object is ${myObject.age}`)

// HOMEWORK WEEK 21 THE JS WAY CHAPTER 6

// let luffy = {
//   devilFruit: 'Gum Gum no Mi',
//   crew: 'Straw Hat Pirate',
//   occupation: 'pirate king',
//   describe(){
//     console.log(`Luffy has ${this.health} health points, ${this.strength} points and is ${this.brother} is his brother `)
//   }
// };

// luffy.mentor = 'Shanks';
// luffy.brother = 'Ace';
// luffy.health = 100;

// luffy.health -= 20;

// console.log(`Luffy is a pirate, currently on track to be the ${luffy.occupation}. He's travelling the 
// world with his crew, the ${luffy.crew}. His devil fruit is the ${luffy.devilFruit}, given to him by ${luffy.mentor}. After his last fight, his health is now ${luffy.health} `)

// luffy.strength = 350;

// luffy.strength +=100;

// console.log(`Luffy strength went up to ${luffy.strength}`)

// console.log(luffy.describe())

// let dog = {
//   name: 'Snoop',
//   species: 'dalmatian',
//   size: '3.5 Feet and 120 pounds',
//   bark(){
//     return 'Grr! Grr! FOH!! '
//   }
// }

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


// const r = Number(prompt("Enter the circle radius:"));

// let circle = {
//   circumference(){
//     let cir;
//     return cir = 2*Math.PI*r
//   },
//   area(){
//     let a;
//     return a = Math.PI*r**2;
//   }
// }

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);


// let account = {
//   name: 'Alex',
//   balance: 0,
//   credit(){
//     return this.balance = this.balance + 250 - 80
//   },
//   describe(){
//     console.log(`owner: ${this.name}, has a balance of ${this.credit()}`)
//   }
// }

// console.log(account.describe())


// HOMEWORK WEEK 21 THE JS WAY CHAPTER 7

// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

// let musketeers = ['Athos', 'Porthos', 'Aramis'];

// for(i=0; i<musketeers.length; i++){
//   console.log(musketeers[i]);
// }

// musketeers.push('D\'Artagnan');

// console.log(musketeers);

// musketeers.forEach(musketeer => {
//   console.log(musketeer)
// })

// musketeers.splice(2,1);

// console.log(musketeers);

// for ( let musket of musketeers){
//   console.log(musket);
// }

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of 
// its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10];

// let sumNums = values.reduce((sum, ele) => sum + ele, 0);

// console.log(sumNums)

// Array maximum
// Write a program that creates the following array, then calculates and shows the 
// array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];

// let valMax = values.reduce((arr,num) => Math.max(arr,num));

// console.log(valMax)

// List of words
// Write a program that asks the user for a word until the user types "stop". 
// The program then shows each of these words, except "stop".

// function elementInput(){
//   ele = prompt('input a word');
//   arr = []
//   if(ele !== 'stop'){
//     arr = [];
//     for(i=0;i>arr.length;i++){
//       console.log(arr.push(ele));
//       ele = prompt('input a word');
//     }
//   }else{
//     console.log(arr)
//   }
// }

// elementInput()


// const birthDate = inventors.sort(function inventor(a,b){
//   if (a>b){
//     return a-b = 1
//   }else if(a===b){
//     return a-b=0
//   }else{
//     return a-b=-1
//   }
// } )


// JAVASCRIPT30 ARRAY CARDIO 1:


// const inventors = [
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// const people = [
//   'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
//   'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
//   'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
//   'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
//   'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
// ];

// // Array.prototype.filter()
// // 1. Filter the list of inventors for those who were born in the 1500's

// let inventor1500 = inventors.filter(function(inventor){
//   if(inventor.year > 1500 && inventor.year < 1600){
//     return true;
//   }
// })

// console.table(inventor1500)

// // Array.prototype.map()
// // 2. Give us an array of the inventors first and last names

// let inventorNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

// console.table(inventorNames) 

// // Array.prototype.sort()
// // 3. Sort the inventors by birthdate, oldest to youngest

// const oldToYoung = inventors.sort(function(a,b){
//   if(a.year>b.year) return 1;
//   else if(a.year < b.year) return -1;
// })

// console.table(oldToYoung)

// // Array.prototype.reduce()
// // 4. How many years did all the inventors live all together? 

// let sumAges = inventors.reduce((sum,age)=> {
//   return sum+(age.passed - age.year)}
//   ,0);

// console.table(sumAges)

// // 5. Sort the inventors by years lived

// const oldest = inventors.sort(function(a,b){
//   const lastGuy = a.passed - a.year;
//   const nextGuy = b.passed - b.year;
//   return lastGuy > nextGuy ? 1 : -1;
// })

// console.table(oldest)

// // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-content-ltr');
// const links = Array.from(category.querySelector('a'));
// const de = links.map(link => link.textContent)


// // 7. sort Exercise
// // Sort the people alphabetically by last name

// const lastNameSort = people.sort((a,b) => a.localeCompare(b));

// console.table(lastNameSort)

// // 8. Reduce Exercise
// // Sum up the instances of each of these
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// const transpo = data.reduce(function(obj, item){
//   if (!obj[item]){
//     obj[item] = 0;
//   }
//   obj[item]++;
//   return obj;
// }, {});

// console.table(transpo)






