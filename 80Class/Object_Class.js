let obj = {
    a: 1,
    b: 2, 
    c: 3,
}
console.log(obj);

let animalss = {
    eats : true,
};
let rabbits = {
    jumps: true,    
};
rabbits.__proto__= animalss;
console.log(rabbits);


// First
class animals {
    constructor(name) {
        this.name = name;
        console.log("object is created");
    }
    eats() {
        console.log("Kha raha ho");
    }
    jumps() {
        console.log("kod raha ho");
    }
}
class Lion extends animals {
    constructor(name) {
        super(name)
        this.name = name;
        console.log("object is created and he is a lion ");
    }
    eats(){
        console.log("kah raha ho bhai ");
        
    }
}
setTimeout(() => {
    let a = new animals("kota");
    console.log(a);
}, 1000);
setTimeout(() => {
    let L = new Lion("sheer");
    console.log(L);
}, 2000);









