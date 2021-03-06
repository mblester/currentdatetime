// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const num2String = (numInput) => {
  numInput = document.getElementById("numInput").value 
  document.getElementById("results2").innerHTML = `${numInput} is a ${typeof(numInput)}`;
}

// Write a JavaScript program to convert a string to the number.
let stringInput = ""

const str2num = (numA) => {
  numA = document.getElementById("stringInput").value
  x.parseInt(numA)
  document.getElementById("results").innerHTML = `${x} is a ${typeof(x)}`;
  console.log(typeof(x))
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const checkDataType = (inputData) => {
    inputData = document.getElementById("input-data").value
    document.getElementById("type-of-input").innerHTML = typeof inputData;
  }

  console.log(checkDataType(true))
  console.log(checkDataType(16))
  console.log(checkDataType('what is this'))

  
// Write a JavaScript program that adds 2 numbers together.
const add = (a, b) => {
  a = document.getElementById("value1").value
  b = document.getElementById("value2").value
  let sum = parseInt(a) + parseInt(b) ;
  document.getElementById("add-numbers").innerHTML = sum ;
}

// Write a JavaScript program that runs only when 2 things are true.

const ifBothTrue = () => {
  let x = parseInt(document.getElementById("valueX").value);
  let y = parseInt(document.getElementById("valueY").value);
  if (x === y) {
    document.getElementById("true-false").innerHTML = "True";
  } else {
    document.getElementById("true-false").innerHTML = "False";
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const ifOneTrue = () => {
  let x = parseInt(document.getElementById("valueX").value);
  let y = parseInt(document.getElementById("valueY").value);
  if (x || y > 0) {
    document.getElementById("true-false").innerHTML = "True";
  } else {
    document.getElementById("true-false").innerHTML = "False";
  }
}


// Write a JavaScript program that runs when both things are not true.  
const neitherTrue = () => {
  let x = parseInt(document.getElementById("valueX").value);
  let y = parseInt(document.getElementById("valueY").value);
  if (x <= 0 && y <= 0) {
    document.getElementById("true-false").innerHTML = "True";
  } else {
    document.getElementById("true-false").innerHTML = "False";
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// const numInput = document.getElementById("num2str")
// const results = num2String(num2str.value)
// //const displayElement = document.getElementById("display-num2str").innerText = results
// num2str.value
//console.log(results)
// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
