// ************************* CallBack Function *************************
// A functin passed as an argument to another function or higher order function is called callback function


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


sum(displayPage, 10, 30); // Sum Function calling it takes 3 arguements function, variable, variable

function sum(callBack, x, y) {
    let result = x + y;
    callBack(result); // calling displayPage function and passing result to that function
}

function displayConsole(result) {
    console.log(result);
}


function displayPage(result) {
    document.getElementById('myH1').textContent = result; // displaying result on webpage
}










