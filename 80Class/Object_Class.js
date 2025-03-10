// let obj = {
//     a: 1,
//     b: 2, 
//     c: 3,
// }
// console.log(obj);

// let animalss = {
//     eats : true,
// };
// let rabbits = {
//     jumps: true,    
// };
// rabbits.__proto__= animalss;
// console.log(rabbits);


// // First
// class animals {
//     constructor(name) {
//         this.name = name;
//         console.log("object is created");
//     }
//     eats() {
//         console.log("Kha raha ho");
//     }
//     jumps() {
//         console.log("kod raha ho");
//     }
// }
// class Lion extends animals {
//     constructor(name) {
//         super(name)
//         this.name = name;
//         console.log("object is created and he is a lion ");
//     }
//     eats(){
//         console.log("kah raha ho bhai ");

//     }
// }
// setTimeout(() => {
//     let a = new animals("kota");
//     console.log(a);
// }, 1000);
// setTimeout(() => {
//     let L = new Lion("sheer");
//     console.log(L);
// }, 2000);


// second 
// cReating and object in the simplest way 
// const person = {
//     name: "ahsan",
//     age: 25,
//     greet: function greeting() {
//         console.log(`Assalamualikum , my name is ${this.name}`);
//     }
// }
// console.log(person.greet());

// third 
const person1 = new object()
person1.name = "rehman ullah";
person1.age = 27;
person1.greet = function() {
    console.log(`ssalamualikum , my name is ${this.name}`);
}
person1.greet();
;







