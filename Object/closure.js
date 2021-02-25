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



const nama = 'Nico';
const umur = 22;
const job = "Frontend Developer";


function sayHello() {
  return `Hallo nama saya ${nama}, umur saya ${umur}, saya adalah seorang ${job}`;
}

console.log(sayHello());






















// todo Hoisting

// todo Scope