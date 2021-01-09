// *? Создать иерархию сущностей (конструкторов, из которых можно создать экземпляры объектов):
// TODO: (1) базовый конструктор «Транспортное средство» с общими для всех транспортных средств свойствами и методами (на ваше усмотрение);
// TODO: (2) дочерние конструкторы: автомобиль, самолет, корабль, которые наследуют общие свойства и методы от родительского;
// TODO: (3) продемонстрировать, как дочерние сущности могут переопределять родительские свойства и методы в соответствии со своим собственным поведением. 

// (1)
class Transport{
    constructor(name, model, power, color, door, places, countPilot){
        this.name = name
        this.model = model
        this.power = power
        this.color = color
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
    constructor(name, model, power, color, door, places, countPilot, transmission){
        super(name, model, power, color, door, places, countPilot, transmission)   
        this.transmission = transmission
        this.movement = 'Дорожный транспорт'
    }    
}
// (2)
class Plane extends Transport{
    constructor(name, model, power, color, door, places, countPilot, chassisType){
        super(name, model, power, color, door, places, countPilot, chassisType)
        this.chassisType = chassisType
        this.movement = 'Летный транспорт'
    }
}
// (2)
class Ship extends Transport{
    constructor(name, model, power, color, door, places, countPilot, width){
        super(name, model, power, color, door, places, countPilot, width)    
        this.movement = 'Морской транспорт'    
        this.width = width + ' метров'
    }
}
// (2)
class Train extends Transport{
    constructor(name, model, power, color, door, places, countPilot, type){
        super(name, model, power, color, door, places, countPilot, type)
        this.type = type
        this.movement = 'Железнодорожный транспорт'
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // (3)
    let transportList = {
        0: new Auto('Audi', 'A3', 130, '#FF0000', 5, 4, 1, 'Автоматическая'),
        1: new Auto('Lada', 'Priora', 120, '#000', 3, 4, 1, 'Механическая'),
        2: new Plane('Airbus', 'A320', 700, '#FFF', 1, 100, 2, 'Колесное шасси'),
        3: new Plane('БЕ', '200', 650, '#CCC', 1, 100, 2, 'Амфибия'),
        4: new Ship('Крейсер', 'Аврора', 1200, '#FFFFFF', 20, 1500, 1, '800'),
        5: new Ship('Azimut', '72S', 800, '#FFCCCC', 3, 20, 1, '180'),
        6: new Train('Ласточка', 'ЭС-1', 300, '#FFF000', 20, 120, 1, 'Пасажирский'),
        7: new Train('ВЛ', '85', 200, '#97ac9b', 4, 2, 1, 'Грузовой') 
    }

    console.table(transportList)

    let tableTransport = document.querySelector('.transport').getElementsByTagName('tbody')[0]

    for(key in transportList) {

        let row = document.createElement("tr")
        tableTransport.appendChild(row)

        let td0 = document.createElement("td")
        td0.innerText = key
        row.appendChild(td0)

        let td1 = document.createElement("td")
        td1.innerText = transportList[key].name
        row.appendChild(td1)

        let td2 = document.createElement("td")
        td2.innerText = transportList[key].model
        row.appendChild(td2)

        let td3 = document.createElement("td")
        td3.innerText = transportList[key].power
        row.appendChild(td3)

        let td4 = document.createElement("td")
        td4.style.textAlign = 'center'
        let divColor = document.createElement("div")
        divColor.style.width = 20+'px'
        divColor.style.height = 20+'px'
        divColor.style.display = 'inline-block'
        divColor.style.border = '1px solid rgba(0,0,0,.4)'
        divColor.style.borderRadius = 50+'%'
        divColor.style.background = transportList[key].color
        td4.appendChild(divColor)
        row.appendChild(td4)

        let td5 = document.createElement("td")
        td5.innerText = transportList[key].door
        row.appendChild(td5)

        let td6 = document.createElement("td")
        td6.innerText = transportList[key].places
        row.appendChild(td6)

        let td7 = document.createElement("td")
        td7.innerText = transportList[key].countPilot
        row.appendChild(td7)

        let td8 = document.createElement("td")
        if(!transportList[key].transmission){
            td8.innerText = '-'
        } else {
            td8.innerText = transportList[key].transmission
        }
        
        row.appendChild(td8)

        let td9 = document.createElement("td")
        td9.innerText = transportList[key].movement
        row.appendChild(td9)

        let td10 = document.createElement("td")
        if(!transportList[key].chassisType){
            td10.innerText = '-'
        } else {
            td10.innerText = transportList[key].chassisType
        }        
        row.appendChild(td10)

        let td11 = document.createElement("td")
        if(!transportList[key].width){
            td11.innerText = '-'
        } else {
            td11.innerText = transportList[key].width
        }
        row.appendChild(td11)

        let td12 = document.createElement("td")
        if(!transportList[key].type){
            td12.innerText = '-'
        } else {
            td12.innerText = transportList[key].type
        }        
        row.appendChild(td12)

    }

    
        
    



    
        
    
    // let audi = new Auto('Audi', 'A3', 130, '#FF0000', 5, 4, 1, 'Автоматическая')
    // let lada = new Auto('Lada', 'Priora', 120, '#000', 3, 4, 1, 'Механическая')
    
    // let airobus = new Plane('Airbus', 'A320', 700, '#FFF', 1, 100, 2, 'Колесное шасси')
    // let be = new Plane('БЕ', '200', 650, '#CCC', 1, 100, 2, 'Амфибия')

    // let aurora = new Ship('Крейсер', 'Аврора', 1200, '#FFFFFF', 20, 1500, 1, '800')
    // let azimut = new Ship('Azimut', '72S', 800, '#FFCCCC', 3, 20, 1, '180')

    // let lastochka = new Train('Ласточка', 'ЭС-1', 300, '#FFF000', 20, 120, 1, 'Пасажирский')
    // let vl = new Train('ВЛ', '85', 200, '#97ac9b', 4, 2, 1, 'Грузовой')

    // let btnForm = document.querySelector('.button')

    // let containerAuto = document.querySelector('.auto')

    // btnForm.addEventListener('click', () => {                
        
        // console.table(TransportList)

        // console.table(audi)
        // console.table(lada)

        // console.table(airobus)
        // console.table(be)

        // console.table(aurora)
        // console.table(azimut)

        // console.table(lastochka)
        // console.table(vl)
    // })

})