// First 
function promise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Yes, I am done");
            resolve("Success: Task Completed");
        }, 2000);
    });
}

promise().then((e) => {
    console.log("Data is in processing...");
    console.log(e);
});


// Second 
function fetchData() {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * 10);
        console.log("Generated Number:", randomNumber);
        setTimeout(() => {
            if (randomNumber < 5) {
                console.log("This number is smaller than 5. Resolving...");
                resolve("Success: Number is smaller than 5");
            } else {
                console.log("This number is 5 or greater. Rejecting...");
                reject("Error: Number is 5 or greater");
            }
        }, 2000);
    });
}

fetchData()
    .then((message1) => {
        console.log("Processing data...");
        console.log(message1);
    })
    .catch((error) => {
        console.log("Handling error...");
        console.error(error);
    });


// third 
// THIS is WRONG method 
//  then() and .catch() methods are used with Promises, but there is no Promise in my code. 
// let randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);
// if (randomNumber < 5) {
//     .then((message) => {
//                 console.log("Processing data...");
//                 console.log(message);
//             })
// }else{
//     .catch((error) => {
//                 console.log("Handling error...");
//                 console.error(error);
//             });
// }
