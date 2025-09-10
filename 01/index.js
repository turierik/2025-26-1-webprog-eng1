let numbers = [7, 4, 2, -6, 2, 3, 0, 5];

// Task 0: calculate the sum of the elements

let sum = 0;
for (let i = 0; i < numbers.length; i++)
    sum += numbers[i]
console.log(sum)

sum = 0;
for (const number of numbers){
    sum += number
}
console.log(sum)

// Task 1: create a new array that contains the even numbers from the numbers array

let even = [];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        //even[even.length] = numbers[i];
        even.push(numbers[i]);
    }
}
console.log(even);

even = [];
for (const number of numbers){
    if (number % 2 === 0){
        //even[even.length] = number;
        even.push(number);
    }
}
console.log(even);

console.log(numbers.filter(x => x % 2 === 0));

// Task 2: create an array that stores the cube of the numbers array
console.log(numbers.map(x => x ** 3));

// Task 3: create an array that stores the square of the even numbers (don't use the even array)
console.log(numbers.filter(x => x % 2 === 0).map(x => x ** 2));

// Task 4: what is the largest number in the numbers array?
// a. for loop
// b. Math.max
// c. reduce

let largest = numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > largest)
        largest = numbers[i];
}
console.log(largest);

console.log(Math.max(...numbers));

console.log(numbers.reduce((prevResult, element) => prevResult > element ? prevResult : element));