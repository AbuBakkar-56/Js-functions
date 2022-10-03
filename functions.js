// //A closer look at functions
// 'use strict';
// //section intro
// //section roadmap
// //Default paramenters
// const bookings=[];
// const createBookings=function(customerName='x',customerCnic=0,customerCountry='SA'){
//        const book={
//         customerName,
//         customerCnic,
//         customerCountry,
//        };
//        bookings.push(book);
// };
// createBookings('Ali',453348674723,'Pakistan');
// createBookings('Noman',45895582445,'India');
// createBookings()
// console.log(bookings) 
// //How passing arguments works value vs refrence
// let flight='A340' //primitive data type
// let passenger={  //refrence data type
//     name:'Ali',
//     passport:3477266436645,
// };
// let checkIn=function(flightNo,passengerDet){
//     flightNo='A450';
//     passengerDet.name=`Mr ${passengerDet.name}`
// };
// (checkIn(flight,passenger))
// console.log(flight);
// console.log(passenger);
// //eg2
// const students=[];
// const createStudents=function(sName,sId,sRoll){
//    const std={
//     sName,
//     sId,
//     sRoll,
//    };
//    students.push(std)
// };
// createStudents('Hassan','89A',8992);
// createStudents('Noman','56CC',9473);
// createBookings('Hassan Ali','90X',9091)
// console.log(students);
// const Modifications=function(std){
//        std.splice(0,1,'Admission Cancelled');
// };
// Modifications(students)
// console.log(students)
// //primitive data types value cannot be changed in functions
// //refrence data types value can be changed in function
// //functions accepting callback functions
// const validateUserPassword=function(userPassword){
//      const tostr=userPassword.toString();
//      if(tostr.includes('!') || tostr.includes('@') || tostr.includes('#') || tostr.includes('$') && tostr.length>8){
//         console.log('Valid Password')
//      }else{
//         console.log('Invalid Password')
//      };
// };
// const validUserEmail=function(userEmail){
//     const tostr=userEmail.toString();
//     if(tostr.includes('.com') && tostr.includes('gmail') && tostr.includes('@') && tostr.length>6){
//         console.log('Valid Email')
//     }else{
//         console.log('Invalid Email')
//     }
// };
// const validateUserCredentials=function(strs,fun){
//     return `${fun(strs)}`
// };
// validateUserCredentials('abu345726@gmail.com',validUserEmail);
// validateUserCredentials('ty$uurnd456',validateUserPassword);
// //first class vs higher order functions
// // simple js functions are first class functions that behave likes a variable
// //fuctions with callback functions are higer order functions
// //functions returing functions
// const calc=function(number){
//     return function(n){
//        console.log( n*number)
//     }
// };
// const c1=calc(12);
// c1(2);
// const c2=calc(34);
// c2(45);
// //call and apply methods
// const bilalTravels={
//     names:'Bilal Travels',
//     iataCode:'bt',
//     Type:'Logistic Company',
//     bks:[],
//     bookPassenger(name,cnic,Busno,from,to){
//         console.log(`Mr.${name} CNIC:${cnic} books a ticket on Bus Number ${this.iataCode}${Busno} from ${from} to ${to}`);
//         this.bks.push(name,cnic,Busno,from,to)
//     }
// };
// bilalTravels.bookPassenger('Ali',4434554,45,'Karachi','Islamabad')
// console.log(bilalTravels.bks);
// const Deawoo={
//     names:'Bilal Travels',
//     iataCode:'bt',
//     Type:'Logistic Company',
//     bks:[],
// };
// const failsalMovers={
//     names:'Bilal Travels',
//     iataCode:'bt',
//     Type:'Logistic Company',
//     bks:[],
// };
// const bookingMethod=bilalTravels.bookPassenger;
// bookingMethod.call(Deawoo,'Hassan',5677555665,56,'Karachi','Lahore');
// console.log(Deawoo.bks);
// bookingMethod.call(failsalMovers,'Nauman',9332532665,56,'Karachi','Attock');
// console.log(failsalMovers.bks)
// //apply method
// const b1=['Nauman',9332532665,56,'Karachi','Attock'];
// bookingMethod.apply(bilalTravels,b1)
// const car={
//     obj:'Obj',
//     type:'car',
//     run:function(){
//         console.log('Run the Object')
//     }
// }
// const plane={
//     obj:'Obj',
//     type:'plane',
// };
// const spec=car.run;
// spec.call(plane)
// //js closures(inner function have access to outer function scope)
// function human(n){
//     function sayHello(){
//        console.log(`Hello Mr ${n}`)
//     }
//     sayHello();
//     function sayHi(){
//         console.log(`Hi Mr ${n}`)
//     }
//     sayHi();
// };
// human('Sina');
// human('Qoli');
// function calcs(number){
//     function add(n1){
//        console.log(n1+number)
//     }
//     add(12);
//     function multiply(n2){
//         console.log(n2*number)
//     }
//     multiply(20)
//     function subtract(n3){
//         console.log(n3-number)
//     }
//     subtract(100)
//     function divide(n4){
//        console.log(number/n4)
//     }
//     divide(34)
// };
// calcs(10);
// //inner function will have access to the outer functions scope(parameters)
// function calcGrades(totalMarks){
//     function Agrade(){
//         if(totalMarks>=80 && totalMarks<=100){
//             console.log('A')
//         }
//     }
//     Agrade();
//     function Bgrade(){
//         if(totalMarks>=70 && totalMarks<=79){
//             console.log('B')
//         }
//     }
//     Bgrade()
//     function Cgrade(){
//         if(totalMarks>=60 && totalMarks<=69){
//             console.log('C')
//         }
//     }
//     Cgrade()
//     function Dgrade(){
//         if(totalMarks>=50 && totalMarks<=59){
//             console.log('D')
//         }
//     }
//     Dgrade()
//     function fail(){
//         if(totalMarks<=49){
//             console.log('fail')
//         }
//     }
//     fail()
// }
// calcGrades(89)
// calcGrades(34)
// function passengercount(){
//     let passengerc=1;
//     function addBookings(){
//         console.log(`Booking ${passengerc++}`)
//     }
//     addBookings()
//     addBookings()
//     addBookings()
// };
// passengercount()
// //immediately invoked function expressions(can run only onece in our code(later use in async await))
// (function(){
//     console.log('This function will run only once')
// })();
// (()=>{
//     console.log('This function will run only once')
// })();
//bind method
// let airBlue={
//     name:'Air Blue',
//     iataCode:'AB',
//     bookings:[],
//     createBookings:function(passengerName,Cnic,Passport,flightNo,from,to){
//          console.log(`PassengerName:Mr.${passengerName} CNIC:${Cnic} Passport:${Passport} flightNo ${this.iataCode}${flightNo} from:${from}=>to:${to}`);
//          this.bookings.push(passengerName,Cnic,Passport,flightNo,from,to)
//     }
// };
// airBlue.createBookings('Ali',658380974,26654332,98,'LHR','RHD');
// airBlue.createBookings('Nawaz',6745535274,244786822,98,'LHR','RHD');
// const bookingMethod=airBlue.createBookings;
// const PIA={
//     name:'PIA',
//     iataCode:'PK',
//     bookings:[]
// }
// const ShaheenAir={
//     name:'Shaheen Air Line',
//     iataCode:'SA',
//     bookings:[]
// };
// const Shaheenbookings=bookingMethod.bind(ShaheenAir);
// Shaheenbookings('Hassan',6745535274,244786822,98,'LHR','RSM')
// const PIAbokings=bookingMethod.bind(PIA);
// PIAbokings('Ali',658380974,26654332,98,'LHR','LDN');
// const airBlueBookings=bookingMethod.bind(airBlue);
// airBlueBookings('Ali',658380974,26654332,98,'DBI','LKH');
// airBlueBookings('Steves',899376223,9083772,91,'SKT','JDH');

