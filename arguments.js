function valuePrint(params) {
    const number = [...arguments]
    const numbers = number.map(x=>x/4) 
    console.log(numbers)
}
valuePrint(1,2,3,4,5,6,7,8,9)