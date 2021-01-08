// *? Создать иерархию сущностей (конструкторов, из которых можно создать экземпляры объектов):
// TODO: (1) базовый конструктор «Транспортное средство» с общими для всех транспортных средств свойствами и методами (на ваше усмотрение);
// TODO: (2) дочерние конструкторы: автомобиль, самолет, корабль, которые наследуют общие свойства и методы от родительского;
// TODO: (3) продемонстрировать, как дочерние сущности могут переопределять родительские свойства и методы в соответствии со своим собственным поведением. 

// (1)
class Transport{
    constructor(name, model, power, color, movement, door, places, countPilot){
        this.name = name
        this.model = model
        this.power = power
        this.color = color
        this.movement = movement
        this.door = door
        this.places = places
        this.countPilot = countPilot
    }

    run(speed = this.power){
        this.speed = speed
        console.log(`Скорость ${this.name} передвижения ${speed} км/час`)
    }
    
}

// (2)
class Auto extends Transport{
    constructor(name, model, power, color, movement, door, places, countPilot, transmission){
        super(name, model, power, color, movement, door, places, countPilot)   
        this.transmission = transmission
    }    
}
// (2)
class Plane extends Transport{
    constructor(name, model, power, color, movement, door, places, countPilot){
        super(name, model, power, color, movement, door, places, countPilot)        
    }
}
// (2)
class Ship extends Transport{
    constructor(name, model, power, color, movement, door, places, countPilot){
        super(name, model, power, color, movement, door, places, countPilot)        
    }
}
// (2)
class Train extends Transport{
    constructor(name, model, power, color, movement, door, places, countPilot){
        super(name, model, power, color, movement, door, places, countPilot)        
    }
}

// (3)
let audi = new Auto('Audi', 'A3', 130, '#FF0000', 'Дорожный транспорт', 5, 4, 1, 'Автоматическая')
let lada = new Auto('Lada', 'Priora', 120, '#000', 'Дорожный транспорт', 3, 4, 1, 'Механическая')

let airobus = new Plane('Airobus', 'A100', 700, '#FFF', 'Летный транспорт', 1, 100, 2)

document.addEventListener('DOMContentLoaded', () => {

    let btnForm = document.querySelector('.button')

    btnForm.addEventListener('click', () => {
        
        console.table(audi)
        console.table(lada)
        console.table(airobus)
    })

})

