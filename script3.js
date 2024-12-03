// ----------function declaration функции--------- 

// function sumnum(a, b){     //a , b параметры ф-ции
    // console.log(a+b)
// }
// sumnum(4, 5)                //аргументы ф-ии

// function sumnum2(a, b = 1){     
    // console.log(a+b)
// }
// sumnum2(4)      // если после "4" поставить аргумент для "b", то b=1 игнор



// function sayError(){
//     alert("двлиощшвпвлдоп")

// }
// sayError()

// let letter = 'a'
// function sayError(){
//     let letter = 'a'
//     alert("a")

// }
// sayError()

// function showError(x){
    // alert(`Error  ${x}  occured`)  //в косые ковычки можно вставить переменную(аргумент ф-ии)
// }
// showError('Out of memory')


// function createHeaders(n) {
//     for(i=1;i<=n;i++){
//     document.write("<h2> Header "+i+"</h2>");
//     }
//     }
//     createHeaders(3);

// function fakeBin(x){
//     let array = x.split('')       //разбивает строку на массив
//     // console.log(array);
//     for(i=0; i<array.length; i++){
//         if(array[i]<5){
//             array[i] = '0' 
//         }else{
//             array[i] = '1'
//         }
//     }
//     return array.join('')       //разбивает массив  строку 
// }
// console.log(fakeBin('162835'));


   
// локальные переменные

// function name1(params){
//     let message = 'hello'
//     console.log(message);
// }
// name1()

// глобальные переменные(внешние, не в функции)
// let message = 'hello'

// function name1(params){
//     let message = "hi"          //если лэт не стоит, то ф-ия для глобальной переменной
//     console.log(message);
// }
// name1()
// console.log(message);


//возврат значения  return

// function sumNum(a, b){
// a + b                    

// }
// console.log(sumNum(4, 5));  //undefined

// function sumNum(a, b){
//    return a + b                   
    
//     }
//     console.log(sumNum(4, 5)); 


    // ----------function EXPRESSION функции--------- 

    // func1()
    
    // let func = function(){
    //   console.log(123) 
    // }
    // func()
    // func1()
    // function func1(){
    //      console.log(456)
    // }

    // ----------  Стрелочные -----------
                      //1 способ
//     let sum = (a, b) => {
//         return a+b
//     }
// console.log(sum(2, 3))

//                      //2 способ
// let sum2 = (a, b) => a+b
// console.log(sum2(2, 3))

//                           //3 способ
// let sum3 = a => alert(123)
// console.log(sum3())      
    

// function string(size){
//     let str = '';
// for(let i=0;i<size;i++){               //i%2 ? str=str+'0' : str=str +'1'
//         if(i%2)
//         str = str + '0'
//     else{
//         str = str + '1'
//     }
//     }
//     return str
// }
// console.log(string(7));

