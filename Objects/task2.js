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
  console.log( sumSalaries(salaries) ); // 650