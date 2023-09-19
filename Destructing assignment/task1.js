let user1 = {
  name: "John",

  years: 30,
};

//Write the destructuring assignment that reads:
//name property into the variable name.
//years property into the variable age.
//isAdmin property into the variable

let { name, years: age, isAdmin = false } = user1;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
