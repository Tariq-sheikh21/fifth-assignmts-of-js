// Declare a empty array

var studentNames = [];



// Declare an empty array using JS object notation to store
// student names in future
var studentNames = {};
console.log(studentNames);


// Declare and initialize a strings array

var fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits);


// Declare and initialize a numbers array


var numbers = [1, 2, 3, 4, 5];
console.log(numbers);


// Declare and initialize a boolean array

var booleanArray = [true, false, true, false];
console.log(booleanArray);


// Declare and initialize a mixed array

var mixedArray = ["apple", 42, true, "banana", false, 3.14];
console.log(mixedArray);


// Declare and Initialize an array and store available
// education


var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.write("Listed Qualifications in Pakistan:<br>");

for (var i = 0; i < qualifications.length; i++) {
    document.write(`${i + 1} ${qualifications[i]}<br>`);
};

// Array to store student names
var studentNames = ["Michail", "John", "Tony"];

// Array to store scores of students
var scores = [320, 230, 480];

// Total marks for each student
var totalMarks = 500;

// Display scores and percentages
for (var i = 0; i < studentNames.length; i++) {
    var studentName = studentNames[i];
    var score = scores[i];
    var percentage = (score / totalMarks) * 100;

    document.write(`Score of ${studentName} is ${score}. Percentage: ${percentage.toFixed(2)}%<br>`);
};


// Initialize an array with color names. Display the array
// elements in your browser.

// Initialize array with color names
let colors = ["red", "green", "blue"];

// Display the array elements
console.log("Original Array:", colors);

// a. Add color to the beginning of the array
let colorToAddToBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddToBeginning);
console.log("Updated Array (added to beginning):", colors);

// b. Add color to the end of the array
let colorToAddToEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddToEnd);
console.log("Updated Array (added to end):", colors);

// c. Add two more colors to the beginning of the array
colors.unshift("purple", "orange");
console.log("Updated Array (added two to beginning):", colors);

// d. Delete the first color in the array
colors.shift();
console.log("Updated Array (deleted first color):", colors);

// e. Delete the last color in the array
colors.pop();
console.log("Updated Array (deleted last color):", colors);

// f. Add color at user-defined position/index
let positionToAdd = prompt("Enter the index where you want to add a color:");
let colorToAdd = prompt("Enter the color to add:");
colors.splice(positionToAdd, 0, colorToAdd);
console.log("Updated Array (added at user-defined position):", colors);

// g. Delete color(s) from user-defined position/index
let positionToDelete = prompt("Enter the index from which you want to delete color(s):");
let numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
colors.splice(positionToDelete, numberOfColorsToDelete);
console.log("Updated Array (deleted from user-defined position):", colors);

// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method


// Store student scores in an array
let studentScores = [320, 230, 480, 120];

// Display original scores
console.log("Original Scores:", studentScores);

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

// Display ordered scores
console.log("Ordered Scores:", studentScores);


// Write a program to initialize an array with city names.Copy3 array elements from cities array to selected Cities array.



// Initialize array with city names
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Display original array
console.log("Cities List:", cities);

// Copy 3 elements from cities array to selectedCities array
let selectedCities = cities.slice(2, 5); // Copy elements from index 2 to index 4 (3 elements)
// Alternatively, you can use: let selectedCities = cities.slice(2, 5).slice(); // to create a shallow copy

// Display selectedCities array
console.log("Selected Cities List:", selectedCities);


// Initialize array


var arr = ["This", "is", "my", "cat"];

// Use join method to create a single string
var resultString = arr.join(" ");

// Display the result
console.log("String:", resultString);



// FiFo first in first out 


// Initialize an empty array to represent the queue
let devicesQueue = [];

// Enqueue (add elements to the end of the array)
devicesQueue.push("keyboard");
devicesQueue.push("mouse");
devicesQueue.push("printer");
devicesQueue.push("monitor");

// Display the original queue
console.log("Original Queue:", devicesQueue);

// Dequeue (remove elements from the front of the array)
let firstDevice = devicesQueue.shift();
let secondDevice = devicesQueue.shift();
let thirdDevice = devicesQueue.shift();
let fourthDevice = devicesQueue.shift();

// Display the dequeued devices
console.log("Dequeued Devices:", firstDevice, secondDevice, thirdDevice, fourthDevice);

// Display the updated queue (empty)
console.log("Updated Queue:", devicesQueue);


// Last In-First Out

// Initialize an empty array to represent the stack
let devicesStack = [];

// Push (add elements to the end of the array)
devicesStack.push("keyboard");
devicesStack.push("mouse");
devicesStack.push("printer");
devicesStack.push("monitor");

// Display the original stack
console.log("Original Stack:", devicesStack);

// Pop (remove elements from the end of the array)
let lastDevice = devicesStack.pop();
let secondLastDevice = devicesStack.pop();
let thirdLastDevice = devicesStack.pop();
let fourthLastDevice = devicesStack.pop();

// Display the popped devices
console.log("Popped Devices:", lastDevice, secondLastDevice, thirdLastDevice, fourthLastDevice);

// Display the updated stack (empty)
console.log("Updated Stack:", devicesStack);



// Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array


// Array of phone manufacturers
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the HTML string
let htmlString = '<select id="manufacturerSelect">';

// Add options for each phone manufacturer
for (let i = 0; i < phoneManufacturers.length; i++) {
    htmlString += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';
}

// Close the select tag
htmlString += '</select>';

// Write the HTML string to the document
document.write(htmlString);
