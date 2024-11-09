/* ============= 1 ============== */
/* // Prompt the user for input
var number = prompt("Enter a number:");

// Output the number
console.log(number); */



/* ============= 2 ============== */
/* // Prompt the user for input
var number = prompt("Enter a number:");

// Check if the number is divisible by both 3 and 4
if (number % 3 === 0 && number % 4 === 0) {
    console.log("Yes");
} else {
    console.log("No");
} */



/* ============= 3 ============== */
/* // Prompt the user for two numbers
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");

// Convert inputs to integers
num1 = parseInt(num1);
num2 = parseInt(num2);

// Find and print the maximum number
if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
} */



/* ============= 4 ============== */
/* // Prompt the user for an integer
var number = prompt("Enter an integer:");

// Convert the input to an integer
number = parseInt(number);

// Check if the number is negative or positive
if (number < 0) {
    console.log("negative");
} else {
    console.log("positive");
} */



/* ============= 5 ============== */
/* var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var num3 = parseInt(prompt("Enter the third number:"));

var max, min;

// Find the maximum number
if (num1 >= num2 && num1 >= num3) {
  max = num1;
} else if (num2 >= num1 && num2 >= num3) {
  max = num2;
} else {
  max = num3;
}

// Find the minimum number
if (num1 <= num2 && num1 <= num3) {
  min = num1;
} else if (num2 <= num1 && num2 <= num3) {
  min = num2;
} else {
  min = num3;
}

console.log("Max element = " + max);
console.log("Min element = " + min); */



/* ============= 6 ============== */
/* // Prompt the user for an integer
var number = prompt("Enter an integer:");

// Convert the input to an integer
number = parseInt(number);

// Check if the number is even or odd
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
} */



/* ============= 7 ============== */
// there is no question no. 7


/* ============= 8 ============== */
/* // Prompt the user for a character
var char = prompt("Enter a character:");

// Convert input to lowercase to handle both uppercase and lowercase input
char = char.toLowerCase();

// Check if the character is a vowel or consonant
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("vowel");
} else {
    console.log("consonant");
} */



/* ============= 9 ============== */
/* // Prompt the user for an integer
var number = prompt("Enter an integer:");

// Convert the input to an integer
number = parseInt(number);

// Loop through numbers from 1 to the entered number
for (var i = 1; i <= number; i++) {
    console.log(i);
} */



/* ============= 10 ============== */
/* // Get input from the user
var num = prompt("Enter an integer:");

// Convert the input to an integer
number = parseInt(number);

// Generate and print the multiplication table up to 12
for (var i = 1; i <= 12; i++) {
  console.log(num * i);
} */



/* ============= 11 ============== */
/* // Get input from the user
var num = parseInt(prompt("Enter a number:"));

// Loop through numbers from 1 to the input number
for (var i = 1; i <= num; i++) {
  // Check if the number is even
  if (i % 2 === 0) {
    console.log(i);
  }
} */



/* ============= 12 ============== */
/* // Get input from the user
var base = parseInt(prompt("Enter the base number:"));
var exponent = parseInt(prompt("Enter the exponent number:"));

// Initialize result as 1
var result = 1;

// Calculate base^exponent using a loop
for (var i = 0; i < exponent; i++) {
  result *= base; // Multiply result by base each time
}

// Print the result
console.log(result); */



/* ============= 12 ============== */
/* // Initialize variables
var subject1 = parseInt(prompt("Enter marks for Subject 1:"));
var subject2 = parseInt(prompt("Enter marks for Subject 2:"));
var subject3 = parseInt(prompt("Enter marks for Subject 3:"));
var subject4 = parseInt(prompt("Enter marks for Subject 4:"));
var subject5 = parseInt(prompt("Enter marks for Subject 5:"));

// Calculate total marks
var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

// Calculate average marks
var averageMarks = totalMarks / 5;

// Calculate percentage (assuming each subject is out of 100 marks)
var percentage = (totalMarks / 500) * 100;

// Print the results
console.log("Total Marks = " + totalMarks);
console.log("Average Marks = " + averageMarks);
console.log("Percentage = " + percentage); */



/* ============= 13 ============== */
/* // Get input from the user
var month = parseInt(prompt("Enter the month number (1-12):"));
var daysInMonth;

// Determine the number of days based on the month number
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
  daysInMonth = 31;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  daysInMonth = 30;
} else if (month === 2) {
  daysInMonth = 28; // Considering February has 28 days (not a leap year)
} else {
  daysInMonth = "Invalid month number"; // Invalid input
}

// Print the number of days
console.log("Days in Month: " + daysInMonth); */



/* ============= 14 ============== */
/* // Input marks for five subjects
var physics = parseInt(prompt("Enter marks for Physics:"));
var chemistry = parseInt(prompt("Enter marks for Chemistry:"));
var biology = parseInt(prompt("Enter marks for Biology:"));
var mathematics = parseInt(prompt("Enter marks for Mathematics:"));
var computer = parseInt(prompt("Enter marks for Computer:"));

// Calculate total marks
var totalMarks = physics + chemistry + biology + mathematics + computer;

// Calculate percentage (assuming each subject is out of 100 marks)
var percentage = (totalMarks / 500) * 100;

// Determine grade based on percentage
var grade;
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else if (percentage >= 40) {
  grade = "E";
} else {
  grade = "F";
}

// Print the results
console.log("Percentage = " + percentage + "%");
console.log("Grade = " + grade); */



/* ============= 15 ============== */
/* // Get input from the user
var month = parseInt(prompt("Enter the month number (1-12):"));
var daysInMonth;

// Use switch case to determine the number of days
switch (month) {
  case 1: // January
  case 3: // March
  case 5: // May
  case 7: // July
  case 8: // August
  case 10: // October
  case 12: // December
    daysInMonth = 31;
    break;
  
  case 4: // April
  case 6: // June
  case 9: // September
  case 11: // November
    daysInMonth = 30;
    break;

  case 2: // February
    daysInMonth = 28; // Assuming a non-leap year
    break;
  
  default:
    daysInMonth = "Invalid month number"; // For invalid input
}

// Print the number of days
console.log("Total days in month: " + daysInMonth); */




/* ============= 16 ============== */
/* // Prompt the user to enter an alphabet
var alphabet = prompt("Enter an alphabet:");

// Convert the input to lowercase for case-insensitive comparison
alphabet = alphabet.toLowerCase();

// Use a switch statement to check the alphabet against vowels
switch (alphabet) {
  // If the alphabet is 'a', 'e', 'i', 'o', or 'u', it's a vowel
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log(alphabet + " is a vowel.");
    break;
  // If none of the above cases match, it's a consonant
  default:
    console.log(alphabet + " is a consonant.");
} */


/* ============= 17 ============== */
/* // Prompt the user to enter two numbers
var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));

// Use a switch case to compare the numbers
switch (true) {
  case num1 > num2:
    console.log(num1 + " is greater than " + num2);
    break;
  case num2 > num1:
    console.log(num2 + " is greater than " + num1);
    break;
  default:
    console.log("Both numbers are equal.");
} */


/* ============= 18 ============== */
/* // Prompt the user to enter a number
var number = parseInt(prompt("Enter a number:"));

// Use a switch case to check if the number is even or odd
switch (number % 2) {
  case 0:
    console.log(number + " is even.");
    break;
  case 1:
    console.log(number + " is odd.");
    break;
  default:
    console.log("Invalid input. Please enter a number.");
} */


/* ============= 19 ============== */
/* // Prompt the user to enter a number
var number = parseInt(prompt("Enter a number:"));

// Use a switch case to check the sign of the number
switch (true) {
  case number > 0:
    console.log(number + " is positive.");
    break;
  case number < 0:
    console.log(number + " is negative.");
    break;
  default:
    console.log(number + " is zero.");
} */


/* ============= 20 ============== */
/* var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var operator = prompt("Enter an operator (+, -, *, /):");

switch (operator) {
  case '+':
    console.log(num1 + num2);
    break;
  case '-':
    console.log(num1 - num2);
    break;
  case '*':
    console.log(num1 * num2);
    break;
  case '/':
    if (num2 !== 0) {
      console.log(num1 / num2);
    } else {
      console.log("Division by zero error.");
    }
    break;
  default:
    console.log("Invalid operator.");
}
 */

