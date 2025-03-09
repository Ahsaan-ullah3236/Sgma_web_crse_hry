// // first 
// let Firsth1= document.getElementsByClassName("h1")[0]
// console.log(Firsth1);

// async function myfunction() {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         document.body.innerHTML = Firsth1.innerHTML;
//        }, );
//         resolve();
//     })
// }
// async function mian(){
//     let
// }
// myfunction()

// // second 
// let headings = document.querySelectorAll("h1");

// function blinkElement(element, duration) {
//     return new Promise((resolve) => {
//         let visible = true;
//         let interval = setInterval(() => {
//             element.style.visibility = visible ? "hidden" : "visible";
//             visible = !visible;
//         }, 500); // Blink every 500ms

//         setTimeout(() => {
//             clearInterval(interval);
//             element.style.visibility = "visible"; // Ensure visibility
//             resolve();
//         }, duration);
//     });
// }

// async function startBlinking() {
//     for (let heading of headings) {
//         await blinkElement(heading, 2000); // Each heading blinks for 2 seconds
//     }
// }

// startBlinking();

// // third 
// const additem = async(item) => {
//     await randomDelay();
//     let div = document.createElement("div");
//     div.innerHTML = item;
//     document.body.append(div)
// }
// const randomDelay = ()=>{
//     return new Promise((resolve, reject) => {
//         let timeout = 1+6 *Math.random();
//         setTimeout(() => {
//             resolve();
//         }, timeout * 2000);
//     })
// }
// let text = ["Initilizing Hackign...",
//     "Reading your Files...",
//     "Password Files Detected...",
//     " Sendig all password and the personal files to the server...",]
//     const showMessages = async () => {
//     for (const item of text) {
//         await additem(item);
//     }
// };

// showMessages();

// async function fetchData() {
//     try {
//       let response = await fetch("https://api.example.com/data");
//       let data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log("Fetch error:", error.message);
//     }
//   }
  
//   fetchData();

// // fifth 
// //   try...catch is a JavaScript statement used for error handling. It allows you to execute a block of code (try) and catch any errors (catch) that may occur during execution
// try {
//     let result = 10 / 0; // No error, but returns Infinity
//     console.log(result);
  
//     let x = y + 5; // This will throw an error (y is undefined)
//   } catch (error) {
//     console.log("An error occurred:", error.message);
//   }
// //   sixth  
// function getData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Data received!");
//       }, 2000);
//     });
//   }
  
//   async function fetchData() {
//     console.log("Fetching data...");
//     const result = await getData(); // Waits until getData() is resolved
//     console.log(result);
//   }
  
//   fetchData();
//   // Output:
//   // Fetching data...
//   // (After 2 seconds) Data received!
//   function myfunction() {
//     return "hello world";
//   }
// console.log( myfunction());

// function greet(name) {
//     return "Hello, " + name + "!";
//   }
  
//   console.log(greet("Ahsan")); // Output: Hello, Ahsan!
//   console.log(greet("Ali"));   // Output: Hello, Ali!
  
// let myarray = [1, 3, 2, 4, 5, 3, 2, 6, 5, 7];

// let uniqueArray = [];
// let seen = {};

// myarray.forEach(element => {
//     if (!seen[element]) {  // If the element is not in "seen" object
//         uniqueArray.push(element); // Add it to the uniqueArray
//         seen[element] = true; // Mark it as seen
//     }
// });

// console.log("Unique Array:", uniqueArray);

let myarray = [1, 3, 2, 4, 5, 3, 2, 6, 5, 7];

console.log("Original Array:", myarray);

// Removing duplicates using Set
let uniqueArray = [...new Set(myarray)];

console.log("Unique Array:", uniqueArray);





  

   