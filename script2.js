// const pasport = true    //если тут false то в уфу
// const ticket = true
// if(pasport && ticket){
//     console.log('летим в турцию')
// }else{
//     console.log('едем в уфу')
// }

// const pasport = true    
// const ticket =true
// const viza = true

// if(viza && ticket&&pasport){
//     console.log('летим в америка')
// }
// else if(pasport && ticket){
//     console.log('летим в турция')  
// }

// else{
//     console.log('едем в уфу')
// }

// let chi = prompt('укажите число')
// for(let i = 1; i <= chi; i++){
//   if(i % 2==0){        //выводит четные
//    console.log(i)}
// }

// let chi = prompt('укажите число')
// for(let i = 1; i <= chi; i++){
//   if(i % 2==1){                 //выводит нечетные
//    console.log(i)}
// }


// typeof


// let age = 30
// console.log(typeof age);

// let city = 'Ufa'
// console.log(typeof city);gjftgujftu

// let statusUser = false
// console.log(typeof 'statusUser')
// console.log(typeof statusUser);

// let data = null
// console.log(typeof data)

// let user
// console.log(typeof user)

//оператор

// let sum = 5 + 6
// console.log(sum)

// let sum2 = 'привет'+' мир'
// console.log(sum2)

// let sum3 = '1'+'2'
// console.log(Number(sum3));
// console.log(sum + sum3)
// let err = 5
// console.log(-err / 0);  //-Infinity

// let a = 4
// console.log(4**2)
// console.log(Math.pow(a, 2))

// a = ++a            //a = a+1
// console.log(a)        
// a = --a            //a = a-1
// console.log(a)          //4
// console.log(a--)            //4, потом вычитается -1
// console.log(-a)             //-3
// console.log(-a / 0)             // - infinity

// alert('Привет,Бро!')
// const message = prompt('Как тебя зовут?')

//promnt()//alert

// alert('Привет,')
// const message = prompt('как дела?', 'пиши сюда')
// alert(message)
// console.log(message)

// let name = prompt('Как ваше имя?')
// alert('Привет ,' + name)

// const year = 2024
// let birthYear = prompt('Год вашего рождения?', 0)
// let age = year - birthYear
// alert(age)

// let hight = prompt('укажите сторону квадрата')
// let a = 4 * hight
// alert(a)


// let work = true
// if(work){
//     console.log('Есть мани!!!');
// }
// let work1 = 15000
// if(work1 <20000){
//     console.log('вам отказ!!!');
// }else{
//     alert('ВАМ ОДДОБРЕНО')  //ЕСЛИ ЛЕТ ВОРК БОЛЬШЕ
// }
// }else{
//     alert('ВАМ ОДДОБРЕНО')  
// }
// let work1 = prompt('укажите зп')
// if(work1<20000){
//     console.log('вам отказ!!!');}

// else if(work1<40000){
//    console.log('нужен поручитель')  
// }
// else if(work1>40000){
//     console.log('ВАМ ОДДОБРЕНО')

    // тернарный оператор
    // let work1 = prompt('укажите зп')
    // work1<=20000 ? console.log('вам отказ') : console.log('Вам одобрено');
   
   
//     let work1 = prompt('укажите зп')
// switch (work1) {
//     case 20000:
//         alert('вам отказ');
//     case 30000:
//         alert('нужен поручитель');
//     case 50000:
//         alert('вам одобрено');
//         default:
//             alert('нужны все документы')
// }

// let age = prompt('сколько вам лет,');
// if(age >=0 && age <2 ){
//     console.log('вы ребенок');
// }
// else if( age>=12 && age<18){
//     console.log("Вы подросток")
// }
// else if( age>=18 && age<60){
//     console.log("Вы взрослый")
// }
// else if( age>60){
//     console.log("Вы пенсионер")
// }