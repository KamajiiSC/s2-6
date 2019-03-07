/***************************
* Variables and Data Types *
***************************/
/*
  //Print to console
  console.log("Hello World!");

  //Set variable value
  var firstName = "John";
  console.log(firstName);

  var lastName="Smith";

  //Numbers in js are floats even if they look like ints
  var age=28;

  var fullAge = true;
  console.log(fullAge);

  //undefined var
  var job;
  console.log(job);

  //Assigning job a value
  job = "Teacher";
  console.log(job);

  //Incorrect variable name
  var 3years = 3;
  var &3years = 3;
  var john/mark = "John and Mark";
  var function= 23;
*/
/***************************************
* Variables mutation and type coercion *
***************************************/
/*
var firstName = "John";
var age = 28;
//Contactonation and coercion
console.log(firstName +" "+age);

//Multiple declarations
var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + ' ' + age +" year old." + " Is he married? " + isMarried);

//Variable mutation
age = "twenty eight";
job = "driver";

//Popup message
alert(firstName + ' ' + age +" year old." + " Is he married? " + isMarried);

//Popup user input
var lastName = prompt("What is his last Name?");
console.log(firstName +" " + lastName);
*/
/******************
* Basic Operators *
******************/
/*
var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math Operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now - 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);
*/
/**********************
* Operator precedence *
**********************/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

//Multiple assignments
var x, y;
//assignment is right to left
x = y = (3 + 5) *  4 - 6;//8 * 4 - 6//32 - 6//26
console.log(x, y);