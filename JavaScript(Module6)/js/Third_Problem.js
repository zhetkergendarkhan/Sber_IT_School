function sum(firstArg){
    return function (secondArg){
        return firstArg+secondArg
    }
}

console.log(sum(4)(5))

