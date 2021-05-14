// Destructuring var
// Destructuring Array

// const opp = ["halo", "I am", "a", "Frondend Developer"];

// ! general

// const greet = opp[0];
// const job = opp[3];
// console.log(job); // Frondend Developer

//  ! use destructuring
// const [one, two, three, job] = opp;
// console.log(job); // Frondend Developer

// Destructuring Object
// const mhs = {
//   nama: "Nico",
//   umur: 22,
//   email: "nicogulobelas@gmail.com",
// };

// const { nama, umur, email } = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// ! ES6
// const profile = {
//   firstName: "Dev",
//   lastName: "Nic",
//   age: 22,
// };

// const { firstName, lastName, age } = profile;

// console.log(firstName, lastName, age);

// ! tanpa deklarasi object

// ({ nama, umur, email } = {
//   nama: "Nico",
//   umur: 22,
//   email: "nicogulobelas@gmail.com",
// });
// console.log(nama);
// console.log(umur);

// *

function math(a, b) {
  return [a + b, a * b];
}

// general
// const values = math(2, 3)[0];
// console.log(values);

// with destructuring
const [plus, multiple] = math(2, 3);
console.log(multiple);
