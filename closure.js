function stopwatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const clock1 = stopwatch();
const clock2 = stopwatch();
clock1();
console.log(clock1());
console.log(clock2());

