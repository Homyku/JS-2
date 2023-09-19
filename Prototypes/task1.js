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
  
  console.log(pockets.pen)    //3
  console.log(bed.glasses)    //1

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

console.log(`Direct time: ${timeDirect} \nChain time: ${timeChain}`)