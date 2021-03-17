// const tampilNama = (nama) =>{
//   return  `Hallo ${nama}`;
// }
// console.log(tampilNama('Nico'));

// const tampilNama = (nama,waktu) => {
//   return `Selamat ${waktu}, ${nama}`
// }
// console.log(tampilNama('Nico', 'Malam'));
const arrowFunction = (parameter) =>{
  return  `ini ${parameter}`;
}
console.log(arrowFunction('Arrow Function')); //ini Arrow Function


// * Implisit return

// const tampilNama = (nama,waktu) => `Selamat ${waktu}, ${nama}`;
// console.log(tampilNama('Nico', 'Malam'));


// let mahasiswa = ['Nico', 'Alfian', 'Renaldy Gulo'];

// !tanpa object
// let jumlahHuruf = mahasiswa.map(nama => nama.length);  
// console.log(jumlahHuruf);

// ! menggunakan object
// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);


/* Contructor FUnction */
// const Mahasiswa = function() {
//   this.nama = 'nico';
//   this.umur = 22;
//   this.sayHello = function(){
//     console.log(`Hallo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
//   }
// }
// const nico = new Mahasiswa();

/* Arrow Function */


/* Object Literal */

// const mhs1 = {
//   nama: 'Nico',
//   umur: 23,
//   sayHello: ()=>{
//     console.log(`Hallo, nama saya ${this.nama} dan saya berumur ${this.umur}`);
//   }
// }

// const Mahasiswa = function() {
//   this.nama = 'nico';
//   this.umur = 22;
//   this.sayHello = function(){
//     console.log(`Hallo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
//   }

//   setInterval(() =>{
//     console.log(this.umur++);
//   });
// }
// const nico = new Mahasiswa();


/* implement arrow function */
// const box = document.querySelector('.box');
// box.addEventListener('click', function(){
//   this.classList.toggle('size');
//   setTimeout(()=>{
//     this.classList.toggle('caption');
//   }, 600);
// });