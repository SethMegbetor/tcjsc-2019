// console.log("hello world");

// var firstName = "John";

// var lastName = "Smith";

// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher'

// console.log(job);

// var firstName = "John";
// var age = 28;

// //Type coercion
// console.log(firstName + " " + age);

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " years old " +
//     job +
//     "  is he married? " +
//     isMarried
// );

// //variable mutation
// age = "twenty eight";
// job = "driver";

// alert(
//   firstName +
//     " is a " +
//     age +
//     " years old " +
//     job +
//     "  is he married? " +
//     isMarried
// );

// var lastName = prompt("what is his last name?");

/*******************
 *Basic operators
 */

// var now, yearJohn, yearMark;
// now = 2021;
// ageJohn = 28;
// ageMark = 33;

// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(x);

/*
Operator precedence
*/

// var now = 2021;
// var yearJohn = 1989;
// var fullAge = 18;

// // multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // more operators
// x *= 2; // x = x * 2
// console.log(x);
// x += 10;
// console.log(x);
// x++; //x += 1 , x = x + 1
// console.log(x);
// x--;
// console.log(x);

// Coding challenge

// var BMI, mass, height;

// var markMass = 10;
// var markHeight = 12;
// var markBMI = markMass / (markHeight * markHeight);
// console.log(`Marks's BMI is ${markBMI}`);

// var johnHeight = 20;
// var johnMass = 24;
// var johnBMI = johnMass / (johnMass * johnMass);
// console.log(`John's BMI is ${johnBMI}`);

// var higherBMI = markBMI > johnBMI;

// console.log(`Is Mark's BMI higher than John's BMI? ${higherBMI}`);

/*
if / else statements
*/

// var firstName = "John";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " will hopefully marry soon :)");
// }

// var isMarried = true
// if (isMarried) {
//     console.log(firstName + " is married");
//   } else {
//     console.log(firstName + " will hopefully marry soon :)");
//   }

// var markMass = 10;
// var markHeight = 12;
// var markBMI = markMass / (markHeight * markHeight);
// console.log(`Marks's BMI is ${markBMI}`);

// var johnHeight = 20;
// var johnMass = 24;
// var johnBMI = johnMass / (johnMass * johnMass);
// console.log(`John's BMI is ${johnBMI}`);

// //var higherBMI = markBMI > johnBMI;
// //console.log(`Is Mark's BMI higher than John's BMI? ${higherBMI}`);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is greater than John's BMI`);
// } else {
//     console.log(`John's BMI is greater than Mark's BMI`);
// }

/*
Boolean Logic
*/

var firstName = "John";
var age = 16;

if (age < 13) {
  console.log(`${firstName} is a boy`);
} 
else if(age > 12 && age < 20){//Between 13 and 19
    console.log(firstName + " is a teenager");
}
else if(age > 19 && age < 30){
  console.log(`${firstName} is a young man`);
}
else {
  console.log(`${firstName} is a man`);
}
