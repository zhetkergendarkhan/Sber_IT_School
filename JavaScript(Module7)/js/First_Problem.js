const userDarkhan = {
    name: "Darkhan",
    surname: "Zhetkergen",
    age: 19,
    university: "Kbtu"
}

const userDaniyar=Object.create(userDarkhan)
userDaniyar.city="Astana"


function getOwnProp(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key])
        }
    }
}


getOwnProp(userDaniyar)
/*getOwnProp(userDarkhan)*/
