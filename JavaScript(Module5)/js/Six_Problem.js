let arr = [1,1,1,1,1,1,1]


function compare(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== a[0]) return !1
    }
    return !0
}

console.log(compare(arr))
