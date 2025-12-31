"use strict";
// Q1
//alert("Welcome To My Page");
//var message = prompt("Please Enter Your Name: ");
//document.write("Hello " + message);

//Q2
function add(a, b) {
  return a + b;
}

//Q3
function temprature1(degree) {
  return degree >= 30 ? "Hot" : "Cold";
}
console.log(temprature1(30));
console.log("----------------------------");

//Q4
function temprature(degree, actualFeel) {
  if (degree >= 25 && degree <= 30 && actualFeel >= 25 && actualFeel <= 30) {
    console.log("Normal");
  } else if (actualFeel < 25 && degree < 25) {
    console.log("Cold");
  } else if (actualFeel > 30 && degree > 30) {
    console.log("Hot");
  } else {
    console.log("Ambiguous, can't detect");
  }
  // You can't use direct ternary operator because ternary operators takes only 2 options, we can make nested ternary operators
  // We can't use switch cases here too becuse we aren't comparing actual valeus we are comparing ranges
}

temprature(27, 27);
temprature(20, 35);
temprature(20, 19);
temprature(37, 35);
console.log("----------------------------");

// Q5
function chooseTracks(faculty) {
  switch (faculty) {
    case "FCI":
      console.log("You're eligible to Programing tracks");
      break;
    case "Engineering":
      console.log("You're eligible to Network and Embedded tracks");
      break;
    case "Commerce":
      console.log("You're eligible to ERP and Social media tracks");
      break;
    default:
      console.log("You're eligible to SW fundamentals track");
  }
}
chooseTracks("FCI");
chooseTracks("Commerce");
chooseTracks("Not A Faculty");
console.log("----------------------------");

// Switch is the best case here because we are comparing an actual value

//Q6
function printOdd(start, end) {
  for (var i = start; i <= end; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
printOdd(1, 6);
console.log("----------------------------");

//Q7
function evaluateMath(expression) {
  return eval(expression);
}

//Q8 --> Internal Script at contact.html
//Q9 --> Done at the browser

//Q10
//const x; // --> isnt right because const cannot be hoisted -- have conflicts with hoisting

//console.log(t); //Uncaught ReferenceError: Cannot access 't' before initialization
//let t = 10;

// console.log(t); // No errors just undefined
// var t = 10;
// console.log("----------------------------");

//Review and test

//Q1

// function foo() {
//   var x;
//   x = 5;
//   y = 6;
//   return x + y;
// }

//console.log(foo());
// won't work in strict ,because y is undefined it will give error

//Q2
// var y;
// y = 10;
// x = 5;
// console.log(x);
// console.log(y);
// var x;

// it works with strict mode no problems because x is hoisted

//Q3
// var x = 5;
// console.log(x);
// console.log(y);
// var y = 7;

// y is undefined because only declarations are hoisted

//Q4
// function test() {
//   for (let i = 0; i < 10; i++) {
//     alert(i);
//     alert(x);
//     let x = 10;
//   }
//   console.log(i);
// }

//test();
// first let doesnt hoist the variable
// second the let isn't accesible outside of the loop (its scope)

//BONUS
document.write("<br><br>");
for (var i = 1; i <= 6; i++) {
  document.write(`<h${i}> Welcome To My Page! </h${i}>`);
}

//2 done inside contact.html (inner scripting, inner styling)

//3
// -- XSS?:
/*
Cross-Site Scripting (XSS) is a vulnerability in a web application that allows a third party to execute a script in the user's browser on behalf of the web application. Cross-site Scripting is one of the most prevalent vulnerabilities present on the web today. 
The exploitation of XSS against a user can lead to various consequences,
such as account compromise, account deletion, privilege escalation, malware infection, and many more. 
*/

// -- ES6
// - let and const keywords
// - Arrow Functions
// - for/of
// - map,sets,classes
// - isFinite, isNaN

// -- TypeScript

/*TypeScript is a syntactic superset of JavaScript which adds static typing.
This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
TypeScript being a Syntactic Superset means it shares the same base syntax as JavaScript, but adds something to it.

JavaScript is a loosely typed language.

It can be difficult to understand what types of data are being passed around in JavaScript.
In JavaScript, function parameters and variables don't have any information!
So developers need to look at documentation, or guess based on the implementation.
TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number.
JavaScript will not.

TypeScript uses compile time type checking.
Which means it checks if the specified types match before running the code, not while running the code.
*/
