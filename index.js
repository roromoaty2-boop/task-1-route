// question 1

// let stringNum = +"123";

// let addString = stringNum + 7;

// console.log(addString);

// question 2

// function validation(num) {
//   return num < 0;
// }

// console.log(validation(6))

// question 3

// const countingNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < countingNum.length; index++) {
//   if (index % 2 === 1) {
//     continue;
//   } else {
//     console.log(countingNum[index]);
//   }
// }

// question 4

// function getEvenNumbers(numbers) {
//   return numbers.filter((number) => number % 2 === 0);
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5]));

// question 5

// function mergeArrays(first, second) {
//   return [...first, ...second];
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// question 6



// function dayNumber(day) {
//   switch (day) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Saturday";
//     default:
//       return "Invalid day";
//   }
// }

// console.log(dayNumber(2));


// question 7

function getStringLengths(strings) {
  return strings.map((text) => text.length);
}

console.log(getStringLengths(["a", "ab", "abc"]));


// question 8 


function checkDivisibility(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}

console.log(checkDivisibility(15));


// question 9 

const square = (number) => number ** 2;

console.log(square(5));

// question 10 

function describePerson(person) {
  const { name, age } = person;
  return `${name} is ${age} years old`;
}

console.log(describePerson({ name: "John", age: 25 }));

// question 11


function sumNumbers(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5));


// question 12


function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 3000);
  });
}

delayedSuccess().then((message) => console.log(message));

// question 13

function findLargest(numbers) {
  if (numbers.length === 0) {
    throw new Error("The array must not be empty");
  }

  return numbers.reduce((largest, number) =>
    number > largest ? number : largest
  );
}

console.log(findLargest([1, 3, 7, 2, 4]));


// question 14


function getObjectKeys(object) {
  return Object.keys(object);
}

console.log(getObjectKeys({ name: "John", age: 30 }));


// question 15


function splitIntoWords(text) {
  const trimmedText = text.trim();
  return trimmedText === "" ? [] : trimmedText.split(/\s+/);
}

console.log(splitIntoWords("The quick brown fox"));




