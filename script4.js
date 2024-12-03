// ООП обьектно-ориентированное прогрпмирование
// Object

// let obj1 = {}            //синтаксис"литерал обьекта"
// let obj2 = new Object   //синтаксис"конструктор обьекта"

// let user = {
//     name: "Viktoria",
//     "age": 37,
//     "data registration": "19.11.2024",
//     teacher: true,
//     pensioner: null,
//     address:{
//         city: "Sterlitamak",
//         street: "Hudaiberdina",
//     },
//     sayHi: () => console.log("Hello!!!"),
// }
// console.log(user.teacher = false) // изменение значения свойства
// user.address.city = "Moscow"              // ------//----

// console.log(user.address.city);   //вызов конкретного об-та

// let newSurname = "Zagarovskaya"
// user.newSurname = newSurname   //добавление св-ва
// console.log(user);

// user.address.dom = "95"

// delete user. pensioner                //удаление свойства 
// console.log(user. pensioner);

// let canvas = {
//     x: 0,
//     y: 2,
//     endX: 10,
//     endY: 15
// }

// for(let tempProperty in canvas){
//     alert(tempProperty)             //ключи
//     alert(canvas[tempProperty])      //значения ключей
// }


                 // 5.2 копирование обьектов

// let a = 1
// let b = 1
// console.log(a==b);
// console.log(a===b);         //строгое равенство только для одинаковых типов

// let a = 1
// let b = a
// b = 5
// console.log(b);
// console.log(a);


// let user = {
//     name: 'Ura'
// }
// let userCopy = user      //копируется ссылка на обьект
// userCopy.name = 'Ula'    //изменено по ссылке из переменной userCopy

// console.log(userCopy);
// console.log(user);


                       //Сравнение по ссылке

// let a = {}
// let b = {}              //2независимых обьекта
// console.log(a==b);     // false
// console.log(a===b);    // false

// let c = {}
// let d = c
// console.log(c==d);     // true
// console.log(c===d);    // true


// let user = {
//     name: 'Ura',
//     age: 25
// }
// let userCopy = {}

// for(let key in user){                //userCopy.name = user.name
//     userCopy[key] = user[key]        //userCopy.age = user.age
// }
// userCopy.name = 'Ola'

// console.log(userCopy);
// console.log(user);


                          //Object.assign

// let user1 = {
//     name: 'Ura',
//     age: 25
// }  
// let user2 = {
//     name: 'Ola',
//     city: 'Ufa'
// } 
// let user3 = Object.assign(user1, user2)   
// console.log(user3);
                 
                     //Массивы Array
// let arr = []
// let arr2 = new Array
// let students = ['Камиль',
//     'Богдан', 
//     'Вика', 
//     'Аделина', 
//     'Vova'
// ]
// students[1] = 'Ruslan'
// students[5] = 'Regina'     //добавили элемент
// students[10] = 'шдвфк'
// students[8] = 'шдвопа'
// console.log(students);
    
// console.log(students[2]);          // вызывает "вика" 
// console.log(students[4]);     
// console.log(students.length);      //показывает длину массива

// let arr = [
//     1, true, 
//     "АБЦД", null, 
//     Symbol, BigInt, 
//     undefined, 
//     {city: "Ufa"}, 
//     function(){alert("Привет")},
//     [1, 2, 3]
// ]

// // let func = () => {
// //     return 1111
// // }
// console.log(arr[8]());


// let students = ['Камиль',
//     'Богдан', 
//     'Вика', 
//     'Аделина', 
//     'Vova'
// ]
// students.pop()               //удаление последнего элемента в мфссиве
// console.log(students);

// students.push("Vova")
// console.log(students);   //добавление элемента в конец

// students.unshift("Lera") //добавление элемента в начало массива
// console.log(students);

// students.shift("Lera") //удаление элемента из начала массива
// console.log(students);

                             
                          //Копирование массива

// let students = ['Камиль',
//     'Богдан', 
//     'Вика', 
//     'Аделина', 
//     'Vova'
// ]
// let users = students  
// users.shift()

// console.log(users);
// console.log(students);


// let students = ['Камиль',
//     'Богдан', 
//     'Вика', 
//     'Аделина', 
//     'Vova'
// ]

// let users = [...students]  //спред оператор
// users.shift()
// console.log(users);
// console.log(students);

                               // Перебор массива(методы)
                               
// let students = [
//     'Камиль',
//     'Богдан', 
//     'Вика', 
//     'Аделина', 
//     'Vova'
// ] 
// for(let i = 0; i<students.length; i++){             //часто
//     console.log(students[i]);
// }  

// for(let user of students){                       //редко
// alert(user)
// }

// for(let user1 in students){                  //не желательно для массива
//     alert(user1) 
// }

// let a = []
// a[222]= "ddd"
// console.log(a.length);
// for(let i = 0; i<a.length; i++){ 

//         console.log(i);
//         console.log(a[i]);
//     }  


// let students = [
//     'Камиль',
//     'Богдан', 
//     'Вика', 
//     'Аделина', 
//     'Vova'
// ]     
// students.length =3
// console.log(students)

                                         //многомерный массив

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

// Метод  Splise

// let students = ['Камиль','Богдан', 'Вика', 'Аделина',  'Vova']
// delete students[2] 

// console.log(students);
// console.log(students.length);

// students.splice(2,2, 'Петя', 'Вася')     //(с какого массива, cколько удалить, )+имена как замена
// console.log(students);                  //если удалить 0, то имена добавляются после индекса 2
// console.log(students.length);

// Slice

// let students = ['Камиль','Богдан', 'Вика', 'Аделина',  'Vova']

// let students2 = students.slice(1,3)     //(оставляет с какого индекса, по какой не вкл. его)
// console.log(students2);                  //создает новый массив не изменяя старый
// console.log(students2.length);

// CONCAT добавляет

// let arr = [1,2]
// console.log(arr.concat([3,4]));         
// console.log(arr.concat([3,4], 5, 6));

// ForEach

// let students = ['Камиль','Богдан', 'Вика', 'Аделина',  'Vova']

// students.forEach((item) => {console.log(`Привет ${item}`)})


// Поиск в массиве indexOf lastIndexOf includes

// let students = ['Камиль','Богдан', 'Вика', 'Аделина',  'Vova']
// console.log(students.indexOf('Богдан'));  // ищет индекс в массисе с начала[0]

// console.log(students.indexOf('Руслан'))   // -1 в консоле,т.к нет в массиве

// console.log(students.lastIndexOf('Богдан'))  //ищет с конца массива

// console.log(students.includes('Богдан'))  //проверяет на наличие в массиве true
//                                                            //false
// console.log(students.includes('kthf'))

// FIND

// let users = [
//     {id: 1, name: "Камиль"},
//     {id: 2, name: "Булат"},
//     {id: 3, name: "Аделина"},
//     {id: 4, name: "Регина"},
   
// ]
// let user = users.find(u => u.name == "Булат")

// console.log(user);         //возвращает весь обьект
// console.log(user.name);    // имя

// let user2 = users.find(u => u.id == 3)
// console.log(user2.name);

//  FILTER

// let users = [
//     {id: 1, name: "Камиль",sex: "man", age: 19}, 
//     {id: 2, name: "Булат",sex: "man",age: 34},
//     {id: 3, name: "Аделина",sex: "woman",age: 15},
//     {id: 4, name: "Регина",sex: "woman",age: 31},
//     {id: 2, name: "Богдан",sex: "man",age: 21},
// ]

// let sayna = users.filter(m => m.sex === "man")
// console.log(sayna);
// console.log(users);
// console.log(sayna === users); //false

// let ageOld= users.filter(a => a.age>= 18)
// console.log(ageOld);

// let d = users.filter(m => m.sex === "woman")
// console.log(d);

// MAP

let users = [
    {id: 1, name: "Камиль",sex: "man", age: 19}, 
    {id: 2, name: "Булат",sex: "man",age: 34},
    {id: 3, name: "Аделина",sex: "woman",age: 15},
    {id: 4, name: "Регина",sex: "woman",age: 31},
    {id: 2, name: "Богдан",sex: "man",age: 21},
]

// let userName = users.map( nm => nm.name)
// console.log(userName);

let userName = users.map(nm =>(
    nm.name !== "Камиль" ? 
    {...nm, age: nm.age+1}:
        nm
    ))
    
// let userName = users.map(nm => nm.name +" "+ (nm.age+1))
console.log(userName);


