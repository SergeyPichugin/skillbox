"use strict"

let UserList = {
    users: [],
    add: function() {        
        let question = prompt("Введите имя и фамилию через пробел:")
        if (question === null) { 
            this.getAllUsers() 
        }          
        else {
            question = question.split(" ")
            let req = this.filterUsers(question)

            // console.log(req)
            if(req == false){
                this.add()
            } else if (req == true){
                UserList.users.push({
                    firstName: question[0],
                    lastName: question[1],
                    regUser: Date()
                })
                this.add()
            }            
        }
    },
    filterUsers: (item) => {
        
        
        if(item.length >= 3) {
            alert('вы ввели больше 2 слов')
            return false
        } 
        else if (item[0] == "" || item[1] == "" || item[0] === !!undefined || item[1] === !!undefined) {
            alert("вы ничего не ввели")
            return false
        }
        else if ( !isNaN(parseFloat(item[0])) || isFinite(item[0]) || !isNaN(parseFloat(item[1])) || isFinite(item[1]) ){
            alert('вы ввели число')
            return false
        } 
        // else {            
            return(UserList.users.filter(user => {
                if( (user.firstName == item[0]) && (user.lastName == item [1]) ){                    
                    alert('такой юзер уже есть')
                    return user
                }
            }).length > 0 ) ? false : true
        // }     
    },
    getAllUsers: function() {
        var output = document.querySelector('.listUsers')                
        UserList.users.forEach(user => {            
            if(user.lastName === undefined) {
                output.innerHTML += '<div class="item"> ( ° ͟ʖ °) <br> ' + '<p>Имя: ' + user.firstName + '</p>' + ' <p>Дата регистрации: ' + user.regUser + '</p></div>'
            } else {
                output.innerHTML += '<div class="item"> ( ° ͟ʖ °) <br> ' + '<p>Имя: ' + user.firstName + '</p>' + '<p> Фамилия: ' + user.lastName + '</p>' + '<p> Дата регистрации: ' + user.regUser + '</p></div>'
            }            
        })
    }
}

export {  UserList }