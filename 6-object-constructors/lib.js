"use strict"

let UserList = {
    users: [],
    add: function() {
        let question = prompt("Введите имя и фамилию через пробел:")

        if (question === null) { 
            this.getAllUsers() 
        } 
        else if(question == '' || question === undefined){
            alert('вы ничего не ввели')
            this.add()
        } 
        else if(!isNaN(parseFloat(question)) && isFinite(question)){
            alert('увы, вы ввели число')
        } 
        else {
            question = question.split(" ")
            if(this.filterUsers(question) == false) {
                this.add()
            } else {
                this.users.push(question)
                this.add()
            }
        }

        
        
        // if (question === null) { 
        //     this.getAllUsers() 
        // } else if (question == "" || question === undefined) {
        //     alert('Вы не ввели ничего!')
        //     this.add()
        // } else if (!isNaN(parseFloat(question)) && isFinite(question)) { 
        //     alert('Вы ввели число')
        //     this.add()
        // } else {
        //     question = question.split(" ")            
        //     if( !isNaN(parseFloat(question[0])) || isFinite(question[1]) ){
        //         alert('Вы ввели число 2')
        //         this.add()
        //     }
        //     else if(question.length >= 3) {
        //         alert('Вы ввели больше 2 слов')
        //         this.add()
        //     } else {
        //         user = question
        //             this.users.forEach(function(el) {
        //                 if(el[0] == user[0] && el[1] == user[1]){
        //                     alert('Такой пользователь уже суще') 
        //                     UserList.users.pop() // тут не правильно работает
        //                 }                        
        //             })
        //         console.log(user)
        //         this.users.push(user)
        //         this.add()
        //     }
            
        // }
    },
    filterUsers: (item) => {

        // console.log(item[0], item[1])
        if(item.length >= 3) {
            alert('вы ввели больше 2 слов')
            return false
        } 
        else if ( !isNaN(parseFloat(item[0])) || isFinite(item[1]) ){
            alert('вы ввели число')
            return false
        } 
        else {
            // console.log(UserList.users)
            UserList.users.filter((user, index) => {
                if(user[0] == item[0] && user[1] == item[1]){
                    alert('такой пользователь уже есть')
                    item[index].pop()
                    return false
                }
                else{
                    return true
                }
            })

            // item.filter( items => {
            //     if(items[0] == item[0] || items[1] == item[1]){
            //         alert('такой пользователь уже есть')
            //         return false
            //     } else {
            //         return true
            //     }
            // })
        }

        // return(

            

        //     users.filter( (item) => {

        //         console.log(item.length)

        //     })
        // )
        
        // users.filter(function (item) {
        //     console.log(item)
        // })

        //  console.log(users)

        // return (

        // users.filter(function (currentObject) {
            
        //     console.log(currentObject)
    
        //   if ((currentObject.firstName === user.firstName) &&  (currentObject.lastName === user.lastName)) {
    
        //     return currentObject;
    
        //   }
    
        //   return false;
    
        // }).length > 0

        // ) ? true : false;
    },
    getAllUsers: function() {
        this.users.forEach(function(el) {
            new User(el[0], el[1])
        })
    }
}



function User(firstName, lastName) {    
    let output = document.querySelector('.listUsers')
    this.firstName = firstName
    this.lastName = lastName
    this.regDate = Date()    
    if (this.lastName === undefined) {
        output.innerHTML += '<div class="item"> ( ° ͟ʖ °) <br> ' + '<p>Имя: ' + this.firstName + '</p>' + ' <p>Дата регистрации: ' + this.regDate + '</p></div>'
    } else {
        output.innerHTML += '<div class="item"> ( ° ͟ʖ °) <br> ' + '<p>Имя: ' + this.firstName + '</p>' + '<p> Фамилия: ' + this.lastName + '</p>' + '<p> Дата регистрации: ' + this.regDate + '</p></div>'
    }
}

export { User, UserList }