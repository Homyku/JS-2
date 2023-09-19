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