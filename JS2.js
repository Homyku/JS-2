//Protostypes
//task 1
//1.Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. 
//For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
//2.Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

let head = {

  glasses: 1

};


let table = {

  pen: 3,

  __proto__: head

};


let bed = {

  sheet: 1,

  pillow: 2,

  __proto__: table

};


let pockets = {

  money: 2000,
  __proto__: bed

};

//console.log(pockets.pen)    3
//console.log(bed.glasses)    1

const iterations = 1000

const startDirect = performance.now()
for (let i=0; i<iterations; i++){
    const glasses = head.glasses
}
const endDirect = performance.now()
const timeDirect = endDirect - startDirect

const startChain = performance.now()
for(let i=0; i<iterations; i++){
    const glasses = pockets.glasses
}
const endChain = performance.now()
const timeChain = endChain - startChain

//console.log(`Direct time: ${timeDirect} \nChain time: ${timeChain}`)

//task 2
//If we call rabbit.eat(), which object receives the full property: animal or rabbit?
//object rabit receives the full property eat() if it's defined on the rabbit. 
//If it's not defined on rabbit, js will look up the prototype chain and find the method on the animal object 

let animal = {

    eat() {
  
      this.full = true;
  
    }
  
  };
  
  let rabbit = {
  
    __proto__: animal
  
  };
  
  rabbit.eat();

//____________________________________________________________
  //CLASSES

  //rewrite Clock written in functional style in the class syntax

  class Clock {
    constructor({ template }) {
      this.template = template;
      this.timer = null;
    }
  
  
    render() {
      const date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      const output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      console.log(output);
    }
  
  
    stop() {
      clearInterval(this.timer);
    }
  
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  const clock = new Clock({ template: 'h:m:s' });
  //clock.start();
  
  //_________________________________________
  //OBJECTS
  //task 1
  //Write a function count(obj) that returns the number of properties in the object:

let user = {

  name: 'John',
  age: 30

};

function count(obj){
    let count = 0
    for (object in obj) count++
    return count
}
//console.log( count(user) ); 

//Task 2.
//There is a salaries object with arbitrary number of salaries.
//Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
//If salaries is empty, then the result must be 0.

let salaries = {

  "John": 100,

  "Pete": 300,

  "Mary": 250

};

function sumSalaries(salariesObj){
    let sum = 0
    for(let salary of Object.values(salariesObj)){
        sum+=salary
    }
    return sum
}
//console.log( sumSalaries(salaries) ); // 650

//_____________________________________________
//Destructing assignment
//task 1

let user1 = {

name: "John",

years: 30

};


//Write the destructuring assignment that reads:
//name property into the variable name.
//years property into the variable age.
//isAdmin property into the variable

let { name, years: age, isAdmin = false} = user1

//console.log( name ); // John
//console.log( age ); // 30
//console.log( isAdmin ); // false

//_____________________________________________
//Map and Set
//task 1
function unique(arr) {

    return Array.from(new Set(arr))
  
  }
  
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
  
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  
  ];
  
  //console.log( unique(values) ); // Hare, Krishna, :-O

  //task 2

  let map = new Map();

map.set("name", "John");


let keys = Array.from(map.keys())

keys.push("more");