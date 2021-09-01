"use strict";

let counter = 0
const arr = [0]

    loop()

function loop() {
    counter++
    arr.unshift(counter)
    console.log(arr)
    console.log(arr.length)
    if (arr.length > 8) {
        arr.pop()
    }
    setTimeout(loop, 1000);
}
