console.log("Shoket is my first elder borther");
console.log("Noshad is my second elder brother");
setTimeout(() => {
    console.log("I am the middel");
    
}, 0);
console.log("Ali is the last one");

// callback : A callback is a function passed as an argument to another function. It runs after the first function completes.
function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched");
      callback(); // Calling the callback function
    }, 2000);
  }
  function processData() {
    console.log("Processing data...");
  }
  fetchData(processData);


// in this i send a two callback functionin one function 
function greet(name,callback1, callback2){
  console.log("hello " + name);
  callback1(); // Call first callback
  callback2(); // Call second callback
}

function saygoodbay(){
  console.log("Good bay!"); 
}
function saygoodbayforthelifetime(){
  console.log("for the life time"); 
}

// Now pass both callbacks correctly
greet("ahsan ullah" , saygoodbay , saygoodbayforthelifetime);
// console.log(callback);





