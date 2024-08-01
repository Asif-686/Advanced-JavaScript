const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    
// const part = numbers.slice(-1); Last element using  slice
const part = numbers.slice(2,5);
const part2 = numbers.splice(2,5);
const part2new = numbers.splice(2,0, ...part2);   
const fullstring = numbers.join(" ");

console.log(part);
console.log(part2);
console.log(part2new);
console.log(numbers);
console.log(fullstring);
