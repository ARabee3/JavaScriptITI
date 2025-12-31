//Q1

var beginnerJsTips = [
  "Always use 'let' and 'const' instead of 'var' to avoid scope-related bugs.",
  "Use console.log() frequently to inspect your variables and debug your logic.",
  "Understand that '===' checks both value and type, while '==' can lead to confusing results.",
  "Learn how to use backticks (``) for strings so you can easily insert variables using ${}.",
  "Remember that array indexes start at 0, not 1; the first item is always array[0].",
  "Use the 'length' property to find out how many items are in an array or characters in a string.",
  "Functions are like recipes: they group code together so you can run it multiple times.",
  "Master the difference between 'null' (intentional absence) and 'undefined' (variable not set).",
  "Use meaningful variable names like 'userAge' instead of 'x' to make your code readable.",
  "Practice using 'if...else' statements to control the flow of your program based on conditions.",
];

document.write(beginnerJsTips[Math.floor(Math.random() * 10)]);

//Q2
function showDate() {
  document.writeln(Date().toLocaleString());
}

//Q3
function checkEmailNoRegex(email) {
  if (email.includes("@")) {
    if (!(email.startsWith("@") || email.endsWith("@"))) {
      return true;
    }
  }
  return false;
}

// var mail = prompt("Enter Your Email Address: ");
// console.log(checkEmailNoRegex(mail));

//Q4
function checkFullName(fullName) {
  var nameRegex = new RegExp(/^[a-zA-Z]{3,}(\s[a-zA-Z]{3,})*$/);
  return nameRegex.test(fullName);
}

function checkEmail(email) {
  var emailRegex = new RegExp(/^[a-zA-Z][a-zA-Z0-9._]*@[a-zA-Z.]+\.eg$/);
  return emailRegex.test(email);
}

// do {
//   var userMail = prompt("Please Enter Your Email");
// } while (!checkEmail(userMail));

// do {
//   var userName = prompt("Please Enter Your Full Name");
// } while (!checkFullName(userName));

//Q6

//Sorting
var newArr = [60, 100, 10, 15, 85];
newArr.sort(function (a, b) {
  return b - a;
});
console.log(newArr);

//b
var heighstGrade = newArr.find(findHighest);
console.log(heighstGrade);
function findHighest(value, index, array) {
  return value <= 100;
}

//c
var belowSixtyStudents = newArr.filter(belowSixty);
console.log(belowSixtyStudents);
function belowSixty(value, index, array) {
  return value < 60;
}

//Q7
var students = {
  Ahmed: 92,
  Yehia: 70,
  Mosaad: 96,
  Nouran: 100,
  Mai: 58,
};

var studentNames = Object.keys(students);

function goodStudent(name) {
  return students[name] >= 90 && students[name] <= 100;
}
console.log(studentNames.find(goodStudent));

var failingNames = Object.keys(students).filter(function (name) {
  return students[name] < 60;
});

students["Ziad"] = 85;
for (var student in students) {
  console.log(student + ": " + students[student]);
}

var lastKey = studentNames[studentNames.length - 1];
delete students[lastKey];

for (var student of Object.keys(students)) {
  console.log(student + " has " + students[student]);
}

var sortedNames = Object.keys(students).sort();

function processDate() {
  var userInput = prompt("Enter your birth date (DD-MM-YYYY):");
  if (
    userInput.length === 10 &&
    userInput.charAt(2) === "-" &&
    userInput.charAt(5) === "-"
  ) {
    var day = parseInt(userInput.substring(0, 2));
    var month = parseInt(userInput.substring(3, 5));
    var year = parseInt(userInput.substring(6, 10));

    var birthDate = new Date(year, month - 1, day);

    alert("Your birth date is: " + birthDate.toDateString());
  } else {
    alert("Wrong Date Format");
  }
}
