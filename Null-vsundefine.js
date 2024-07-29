// let value ; 
console.log(value)

function add (num,num1){
  return num + num1
}

// Examples of undefined
let undefinedVariable
console.log(undefinedVariable); // Output: undefined

function returnNothing() {}
console.log(returnNothing()); // Output: undefined

const obj = {}
console.log(obj.nonExistentProperty); // Output: undefined

// Examples of null
let nullVariable = null
console.log(nullVariable); // Output: null

function returnNull() {
  return null
}
console.log(returnNull()); // Output: null

// Explanation of null
// null is a deliberate non-value or absence of any object value
// It is often used to represent an intentional absence of a value

// Difference between null and undefined
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (this is a known JavaScript quirk)

console.log(null === undefined); // Output: false
console.log(null == undefined); // Output: true (loose equality)


