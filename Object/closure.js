// todo Execution Context
// const nama = "nico";
// alert(nama);

// * Creation phase pada global context
// jika ada nama const, let, var maka = undifined
// jika ada nama function maka = fn()
// itu adalah hoisting
// window = global object
// this = window
// execution phase



// const nama = 'Nico';
// const umur = 22;
// const job = "Frontend Developer";


// function sayHello() {
//   return `Hallo nama saya ${nama}, umur saya ${umur}, saya adalah seorang ${job}`;
// }

// console.log(sayHello());






















// todo Hoisting

// todo Scope



// ! Closure
// todo Lexical Scope
// function init() {
//   let nama = "Nico";
//   function tampilNama() {
//     console.log(nama);
//   }
//  return tampilNama;
// }
// let panggilNama = init();
// panggilNama(); 


// /////////////////////////////////////
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Hallo ${nama}, Selamat ${waktu}`);
//   }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');

// selamatMalam('Nico');

/////////////////////////////////

// let add = (function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   } 
// })(); 


// console.log(add());
// console.log(add());
// console.log(add());
