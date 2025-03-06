// first 
let Firsth1= document.getElementsByClassName("h1")[0]
console.log(Firsth1);

async function myfunction() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        document.body.innerHTML = Firsth1.innerHTML;
       }, );
        resolve();
    })
}
async function mian(){
    let
}
myfunction()

// second 
let headings = document.querySelectorAll("h1");

function blinkElement(element, duration) {
    return new Promise((resolve) => {
        let visible = true;
        let interval = setInterval(() => {
            element.style.visibility = visible ? "hidden" : "visible";
            visible = !visible;
        }, 500); // Blink every 500ms

        setTimeout(() => {
            clearInterval(interval);
            element.style.visibility = "visible"; // Ensure visibility
            resolve();
        }, duration);
    });
}

async function startBlinking() {
    for (let heading of headings) {
        await blinkElement(heading, 2000); // Each heading blinks for 2 seconds
    }
}

startBlinking();

// third 
const additem = async(item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}
const randomDelay = ()=>{
    return new Promise((resolve, reject) => {
        let timeout = 1+6 *Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 2000);
    })
}
let text = ["Initilizing Hackign...",
    "Reading your Files...",
    "Password Files Detected...",
    " Sendig all password and the personal files to the server...",]
    const showMessages = async () => {
    for (const item of text) {
        await additem(item);
    }
};

showMessages();

async function fetchData() {
    try {
      let response = await fetch("https://api.example.com/data");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Fetch error:", error.message);
    }
  }
  
  fetchData();
  

  

   