
const numbers = [1, 5, 15, 200, 25];

// Printing array using for loop
console.log("Printing array using for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Printing array using do-while loop
console.log("Printing array using do-while loop:");
let j = 0;
do {
    console.log(numbers[j]);
    j++;
} while (j < numbers.length);

// Printing array using while loop
console.log("Printing array using while loop:");
let k = 0;
while (k < numbers.length) {
    console.log(numbers[k]);
    k++;
}

//Sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of numbers=",sum);



// Largest number
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
try {
    console.log("Largest number:", largest);
} catch (error) {
    console.log("Error:", error.message);
}


//Smallest number
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
try {
    console.log("Smallest number:", smallest);
} catch (error) {
    console.log("Error:", error.message);
}

// average
const average = sum / numbers.length;
console.log("Average:", average);

