// Falsy values
// false
// 0
// -0
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN
let name = " ";
if(name){
    console.log("this is true");
}
else{
    console.log("this is false");
}