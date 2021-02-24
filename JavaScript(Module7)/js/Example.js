const userDarkhan={
    name:"Darkhan",
    surname:"Zhetkergen",
    age:19,
    university:"Kbtu"
}

const userDaniyar={
    name:"Daniyar",
    surname:"Amangeldi",
    age:21,
    university:"Kbtu"
}

/*delete userDarkhan.name

for (let key in userDarkhan)

console.log(`First User:${userDarkhan[key]}`)*/


/*const userBiba={...userDarkhan}
userBiba.city="Almaty"
console.log(userDarkhan)
console.log(userBiba)*/

const person={
    city:"Almaty"
}

const user=Object.create(person)
user.ownCity="Astana"
for (let key in user){
    if(user.hasOwnProperty(key))
console.log(key)

}
console.log(Object.getPrototypeOf(user))


