let myMap = new Map();
myMap.set('name', 'Darkhan')
myMap.set('surname', 'Zhetkergen')
myMap.set('university', 'Kbtu')
myMap.set('age', 19)
myMap.set('status', true)

for (let [key,value] of myMap) {
    console.log(`Ключ:${key}----Значение:${value}`)
}

