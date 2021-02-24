const user = {
    name: "Darkhan",
    surname: "Zhetkergen",
    age: 19,
    university: "Kbtu"
}

function check(obj,str){
    for (let key in obj){
        if(obj[key]===str){
            return true
        }
        else{
            return false
        }
    }
}

console.log(check(user,"Darkhan"))
