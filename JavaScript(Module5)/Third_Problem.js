function reverseString(res) {
    let reversed = res.split("");
    let reversedArray = reversed.reverse();
    let joinedArray = reversedArray.join("")
    return joinedArray;
}

const reversedResult=prompt("Enter string")
console.log(reverseString(reversedResult))
