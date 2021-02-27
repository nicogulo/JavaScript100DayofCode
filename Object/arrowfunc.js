// const tampilNama = (nama) =>{
//   return  `Hallo ${nama}`;
// }
// console.log(tampilNama('Nico'));

// const tampilNama = (nama,waktu) => {
//   return `Selamat ${waktu}, ${nama}`
// }
// console.log(tampilNama('Nico', 'Malam'));

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
const Mahasiswa = function() {
  this.nama = 'nico';
  this.umur = 22;
  this.sayHello = function(){
    console.log(`Hallo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
  }
}
const nico = new Mahasiswa();