// ************************* CallBack Function *************************
// A functin passed as an argument to another function or higher order function is called callback function

// const { useCallback } = require("react");


// hello(wait);


// function hello(callBack) {
//     console.log("Hello!");
//     callBack();
// }

// function leave() {
//     console.log("Leave");
// }

// function wait() {
//     console.log("Wait");
// }

// function goodBye() {
//     console.log("GoodBye!!");
// }


// sum(displayPage, 10, 30); // Sum Function calling it takes 3 arguements function, variable, variable

// function sum(callBack, x, y) {
//     let result = x + y;
//     callBack(result); // calling displayPage function and passing result to that function
// }

// function displayConsole(result) {
//     console.log(result);
// }


// function displayPage(result) {
//     document.getElementById('myH1').textContent = result; // displaying result on webpage
// }





// *****************************************************************************************************************************************

// 🧠 CALLBACK FUNCTION PRACTICE (BEGINNER)
// ✅ Problem 1: Basic Callback
// Task:

// Create a function sayHello(callback)
// It should print:

// Hello

// Then call the callback which prints:

// Welcome

sayHello(Welcome);

function sayHello(callback) {
    console.log("Hello");
    callback();
}

function Welcome() {
    setTimeout(function () { // It will call the welcome funciton after 3 seconds.
        console.log("Welcome");

    }, 3000);
}

// ✅ Problem 2: Add Numbers
// Task:

// Create function add(a, b, callback)

// Add two numbers

// Pass result to callback

// Callback prints result

// Output:
// Sum is: 20

add(10, 30, displayResult);

function add(a, b, callback) {
    let result = a + b;
    callback(result);
}

function displayResult(result) {
    console.log(result);
}


// ✅ Problem 3: Print Name
// Task:

// Create function printName(name, callback)

// Print the name

// Then callback prints:

// Nice to meet you

printName('Chinmay', str)

function printName(name, callback) {
    console.log(name);
    callback();
}

function str() {
    console.log("Nice to meet you");
}

// ✅ Problem 4: Multiply Numbers
// Task:

// Create function multiply(a, b, callback)

// Multiply numbers

// Callback prints result

multiply(20, 2, printMultiply);

function multiply(a, b, callback) {
    let result = a * b;
    callback(result);
}

function printMultiply(result) {
    console.log("Multiplication is : " + result);
}

// ✅ Problem 5: Even or Odd Checker
// Task:

// Create function check(num, callback)

// If number is even → callback prints:

// Even Number

// Else:

// Odd Number

check(2, printEvenOdd);

function check(num, callBack) {
    callBack(num);
}

function printEvenOdd(num) {
    if (num % 2 == 0) {
        console.log("Even Number");
    }
    else {
        console.log("Odd Number");
    }
}


// ✅ Problem 6: Array Display
// Task:

// Create function showArray(arr, callback)

// Pass array

// Callback prints all values

// Example:

// [5, 10, 15]


showArray([5, 10, 15], printArray);
function showArray(arr, callBack) {
    callBack(arr);
}

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


// ✅ Problem 7: Uppercase String
// Task:

// Create function convertUpper(text, callback)

// Convert string to uppercase

// Callback prints result

convertUpper('chinmay', printStr)

function convertUpper(text, callback) {
    let upper = text.toUpperCase();
    callback(upper);
}

function printStr(upper) {
    console.log(upper);
}


// ✅ Problem 8: Simple Calculator
// Task:

// Create function calculator(a, b, callback)

// Callback performs operation (add or subtract)

calculator(25, 15, add);
calculator(25, 15, sub);

function calculator(a, b, callback) {
    callback(a, b);
}

function add(a, b) {
    let result = a + b;
    console.log("Addition of two number is : " + result);
}

function sub(a, b) {
    let result = a - b;
    console.log("Substraction of two number is : " + result);
}



// ✅ Problem 9: Message After Task
// Task:

// Create function taskDone(callback)

// Print:

// Task Finished
// Callback prints:
// Next Task Started

taskDone(task);

function taskDone(callback) {
    console.log("Task Finished");
    callback();
}

function task() {
    console.log("Next Task Started");
}

// ✅ Problem 10: Login Simulation
// Task:

// Create function login(status, successCallback, failCallback)

// If status true → successCallback

// Else → failCallback

// login(true, success, fail);
login(false, success, fail);

function login(status, successCallback, failCallback) {
    if (status) {
        successCallback();
    }
    else {
        failCallback()
    }
}

function success() {
    console.log("successCallbakc");
}
function fail() {
    console.log("failCallback");
}



// ⭐ Learning Tip

// Callback pattern:

// function main(callback) {
//    // work
//    callback();
// }


