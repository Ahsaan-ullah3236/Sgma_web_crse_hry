// first 
async function myfunction() {

    return setTimeout(() => {
         console.log("hello world");

    }, 2000);
}
myfunction().then(console.log);

// Second  
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("First loading ");
            resolve();
        }, 2000);
    },     
)}
async function main() {
    console.log("await");
    let awaitWords = await getData(); 
    console.log(awaitWords);
}
main();
console.log("I am the last ");


// third 
async function fetchData() {    
    console.error("Failed to fetch data")
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    setTimeout(() => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.clear();
        console.log(response);
    }, 3000);

}
fetchData()

// four 
async function fetchData() {
    try {
        console.error("Failed to fetch data"); // Show error message immediately

        setTimeout(async () => {  // Make this function async
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // console.clear()
            let data = await response.json();
            console.log('Data fetched successfully:', data);
            
        }, 2000);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchData();







