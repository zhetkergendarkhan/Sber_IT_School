function reverseString(result) {
    let reversed = result.split("");
    let reversedArray = reversed.reverse();
    let joinedArray = reversedArray.join("")
    return joinedArray;
}

const result=prompt("Enter string")
console.log(reverseString(result))
