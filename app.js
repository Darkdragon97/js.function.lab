// console.log("It's working")
// const maxOfTwoNumbers = (x, y) => {
//   if (x >= y) {
//     return x // If x is greater then or equal to y, return x
//   } else {
//     return y // If x is less then y, return y
//   }
// }
// console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9)) // output: 9

// const isAdult = (age) => {
//   if (age >= 18) {
//     return 'Adult' //If the age is 18 or greater, return 'Adult'
//   } else {
//     return 'Minor' // Otherwise, return 'Minor'
//   }
// }

// console.log('Exercise 2 Result:', isAdult(21)) // Output: 'Adult'

// const isCharAVowel = (char) => {
//   if (char === 'a') {
//     return true
//   } else return false
// }
// console.log('Exercise 3 Result:', isCharAVowel('a')) // Output: true

// const generateEmail = (name, email) => {
//   return `${name}@${email}`
// }

// console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

// const greetUser = (name, timeOfDay) => {
//   return `Good${timeOfDay}${name}!`
// }
// console.log('Exercise 5 Result:', greetUser('Sam', 'morning'))

// const maxOfThree = (num1, num2, num3) => {
//   return Math.max(num1, num2, num3)
// }

// console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

// const calculateTip = (num1, num2) => {
//   return 50 * 0.2, 20 * 0.5
// }
// console.log('Exercise 7 Result:', calculateTip(50, 20))

// const convertTemperature = (Celsius, Fahrenheit) => {
//   if (Celsius === 'C') {
//     return Fahrenheit * (5 / 9) + 32
//   } else if (Fahrenheit === 'F') {
//     return Celsius * (5 / 9) - 32
//   }
// }

// console.log('Exercise 8 Result:', convertTemperature(32, 'C'))

const basicCalculator = (num1, num2, minus) => {
  if (minus === 'subtract') {
    return num1 - num2
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'))

// calculateGrade(A, B, C, D, F)
