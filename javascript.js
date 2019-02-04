const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// //Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// //Sort the numbers in descending order (10, 9, 8, 7, etc).
// let descending = integers.sort((a, b)=> b - a)
// console.log(descending)

// //Remove any integers greater than 19.
// let descendingAndOver19 = descending.filter(number=> number > 19)
// console.log(descendingAndOver19)

// //Multiply each remaining number by 1.5 and then subtract 1.
// let numberMulitplied = descendingAndOver19.map(number => (number * 1.5) -1)
// console.log(numberMulitplied)

// //Then output (either in the DOM or the console) the sum of all the resulting numbers.
// let reducedArray = numberMulitplied.reduce((accumaltor, current ) => accumaltor += current)
// console.log(reducedArray)




//done on a single line
const chainedArray = integers.sort((a, b)=> b - a).filter(number=> number > 19).map(number => (number * 1.5) -1).reduce((accumaltor, current ) => accumaltor += current)
console.log(chainedArray)

