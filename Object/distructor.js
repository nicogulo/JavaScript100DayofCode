// Destructuring var
// Destructuring Array

// const greeting = ['halo', 'nama', 'saya', 'nico'];
// // ! general
// // const greet = greeting[0];
// // const name = greeting[1];
// // console.log(name);

// //  ! use destructuring
// const [greet, one, two, three] = greeting;
// console.log(greet);


// Destructuring Object
// const mhs= {
//   nama: 'Nico',
//   umur: 22,
//   email: 'nicogulobelas@gmail.com'
// };


// const {nama, umur, email} = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);


// ! tanpa deklarasi object


// ( {nama, umur, email} = {
//   nama: 'Nico',
//   umur: 22,
//   email: 'nicogulobelas@gmail.com'
// });
// console.log(nama);

// * 

function math(a, b){
  return [a + b, a * b];
}

// general
// const values = math(2,3)[0];
// console.log(values);


// with destructuring
const [plus, multiple] = math(2,3);
console.log(multiple);   