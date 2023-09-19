//Write a function count(obj) that returns the number of properties in the object:

let user = {

    name: 'John',
    age: 30,
    city: 'Krakow',
    country: 'Poland'
  
  };
  
  function count(obj){
      let count = 0
      for (object in obj) count++
      return count
  }
  
  console.log( count(user) ); 