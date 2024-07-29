// Double equals (==) - Loose equality
console.log(5 == "5");  // true (coerces types)
console.log(0 == false);  // true (coerces types)
console.log(null == undefined);  // true

// Triple equals (===) - Strict equality
console.log(5 === "5");  // false (different types)
console.log(0 === false);  // false (different types)
console.log(null === undefined);  // false

// Examples with objects
let obj1 = { a: 1 }
let obj2 = { a: 1 }
let obj3 = obj1

console.log(obj1 == obj2);  // false (different objects)
console.log(obj1 === obj2);  // false (different objects)
console.log(obj1 == obj3);  // true (same object reference)
console.log(obj1 === obj3);  // true (same object reference)
