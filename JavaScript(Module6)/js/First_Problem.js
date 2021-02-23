let arr = [1,2,3,4,5,6,7,8,9,undefined,'Hello']
let odd = 0
let even = 0
let other = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even++
    } else if (arr[i] % 2 == 1) {
        odd++
    } else {
        other++
    }
}

console.log(`Odd:${odd}`)
console.log(`Even:${even}`)
console.log(`Others:${other}`)
