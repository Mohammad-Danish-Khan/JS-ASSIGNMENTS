// Answer 1

let numfirst = prompt("Enter the first number:");
let numsec = prompt("Enter the second number:");

if (numfirst > numsec) {
  console.log(numfirst + " is larger.");
} else {
  console.log(numsec + " is larger.");
}

//  Answer  2

let num = prompt("Enter a number:");
if (num > 0) {
  alert("The sign is +");
} else if (num < 0) {
  alert("The sign is -");
} else {
  alert("The number is 0.");
}

//  Answer  3


let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
let num4 = prompt("Enter the fourth number:");
let num5 = prompt("Enter the fifth number:");

let largest = num1;

if (num2 > largest) {
  largest = num2;
}
if (num3 > largest) {
  largest = num3;
}
if (num4 > largest) {
  largest = num4;
}
if (num5 > largest) {
  largest = num5;
}

console.log("The largest number is " + largest);

//  Answer  4

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even.");
    } else {
      console.log(i + " is odd.");
    }
  }


//  Answer  5

let studentMarks = [80, 90, 65, 70, 85];

let totalMarks = 0;
for (let i = 0; i < studentMarks.length; i++) {
  totalMarks += studentMarks[i];
}

let averageMarks = totalMarks / studentMarks.length;

let grade;

if (averageMarks < 60) {
  grade = "F";
} else if (averageMarks < 70) {
  grade = "D";
} else if (averageMarks < 80) {
  grade = "C";
} else if (averageMarks < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log("The average marks is " + averageMarks + " and the grade is " + grade);

//  Answer  6

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

//  Answer  7

let row = 5;
let pattern = "";

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);