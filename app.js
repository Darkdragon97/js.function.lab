console.log("It's working")
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x // If x is greater then or equal to y, return x
  } else {
    return y // If x is less then y, return y
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9)) // output: 9

const isAdult = (age) => {
  if (age >= 18) {
    return 'Adult' //If the age is 18 or greater, return 'Adult'
  } else {
    return 'Minor' // Otherwise, return 'Minor'
  }
}

console.log('Exercise 2 Result:', isAdult(21)) // Output: 'Adult'

const isCharAVowel = (char) => {
  if (char === 'a') {
    return true
  } else return false
}
console.log('Exercise 3 Result:', isCharAVowel('a')) // Output: true

// generateEmail("johnsmith", "example.com") { if (generateEmail ("johnsmith", "example.com")) => {
//   return 'johnsmith@example.com';
//   else {
//     return false;
//   }
// }
// }
// onsole.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// greetUser("morning", "afternoon", "evening") {
//   if ("Sam", "morning") => {
//     return 'Goodmorning Sam';
//   } else if("Sam", "afternoon") => {
//     return 'Goodafternoon Sam';
//   } else if("Sam", "evening") => {
//     return 'Goodevening Sam'
//   }
// }
// console.log('Exercise 5 Result:', greetUser("Sam", "morning"),("Sam","afternoon"), ("Sam", "evening"));

// maxOfThree(17, 4, 9)
// if(17 > 4) => {
//   return 17;
// } else if (17 > 9) => {
//   return 17;
// }
// console.log('Exercise 6 Result:', maxOfThree(5, 10,8));

// calculateTip(50, 20)
// if (50 * 0.5) => {
//   return 10;
// } else if (20 * 0.2) => {
//   return 10;
// }
// console.log('Exercise 7 Result:', calculateTip(50, 20))

// convertTemperature('C', 'F')
// if (32, 'C') => {
//   return 89.6;
// } else if(32, 'F') => {
//   return 0;
// }
// console.log('Exercise 8 Result:', convertTemperature(32,"C"));

// basicCalculator('ass', 'subtract', 'multiply', 'divide')
// if(10 - 5) => {
//   return 5;
// } else if(10 * 5) => {
//   return 50;
// } else if(10 / 5) => {
//   return 2;
// }
// console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

// calculateGrade(A, B, C, D, F)
