const numbers = [3,5,6,8,9,11,21];
 let output = [];
// for(let i = 0;i< numbers.length;i++){
//     result =  numbers[i] * numbers[i];
//     output.push(result);
// }
// output = numbers.map(function(x) {
//     return x * x
// })
output = numbers.map(x => x*x)
const result = numbers.filter(x => x>5).map(x => x*x);
console.log(output);
console.log(result);