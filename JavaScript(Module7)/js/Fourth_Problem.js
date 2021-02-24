//Родитель
function ElectricalApp(name, flag, power) {
        this.warning = 'careful',
        this.name = name,
        this.flag = flag,
        this.power = power
}

ElectricalApp.prototype.turnOnOff = function () {
    if (this.flag == true) {

        console.log(`The Electrical Appliance-${this.name}turn on, be very ${this.warning}.
                    Power consumption:${this.power} Wt`)
    } else {
        console.log(`The Electrical Appliance-${this.name}turn off,do not worry.
                   Power consumption:${this.power} Wt`)
    }
}

//Ребенок1
function Laptop(name, price) {
    this.name = name
    this.price = price
}

Laptop.prototype = Object.create(ElectricalApp.prototype)
Laptop.prototype.constructor = Laptop

Laptop.prototype.turnOnOff = function () {
    console.log(`${this.name} has Charger, do not worry!`)
}
Laptop.prototype.showPrice = function () {
    console.log(`The price of this ${this.name} is: ${this.price}$`)
}

//Ребенок2
function Lamp(name, power, color) {
    this.name = name,
    this.power = power
    this.color = color
}


Lamp.prototype = Object.create(ElectricalApp.prototype)
Lamp.prototype.constructor = Lamp


Lamp.prototype.whatColor = function () {
    console.log(`The ${this.name}-Lamps color is ${this.color} and its power is ${this.power} Wt `)
}


//Вызов
let computer1 = new ElectricalApp("Computer", true, 200)
let laptop1 = new ElectricalApp("Laptop", false, 150)
let laptop2 = new Laptop("Acer", 1000)
let lamp1 = new Lamp('Lumus', 400, 'red')


computer1.turnOnOff()
laptop1.turnOnOff()
laptop2.turnOnOff()
laptop2.showPrice()
lamp1.whatColor()
