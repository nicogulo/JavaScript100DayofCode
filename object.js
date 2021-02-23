// * Object
// didalam object terfapat keyword This. 

// ! Properti: berisi nilai
// ! method : berisi fution 

// todo Objecy literal
// !tidak efektif untuk objeck yang banyak
// let  mahasiswa = {
//   nama: 'Nico',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi =  this.energi + porsi;
//     return this.energi; 
//   }
// }


// todo FUnction Declaration
// !
// function Mahasiswa(nama, energi) {

// // properti
//  let mahasiswa = {};
//  mahasiswa.nama = nama;
//  mahasiswa.energi = energi;

// //  method
//  mahasiswa.makan = function (porsi) {
//    this.energi += porsi;
//    console.log(`Haloo ${this.nama}, selamat makan. Energi anda sebesaar ${this.energi}`);
//  }
//  mahasiswa.main = function (jam) {
//    this.energi -= jam;
//    console.log(`Hallo ${this.nama}, selamat bermain`);
//  }
//  return mahasiswa;
// }

// let nico = Mahasiswa('Nico', 10);
// let gulo = Mahasiswa('Gulo',20);



// todo Contructor Function
// // menggunakan keyword new
// function Mahasiswa(nama, energi) {

//   // properti

//    this.nama = nama;
//    this.energi = energi;

//   //  method
//    this.makan = function (porsi) {
//      this.energi += porsi;
//      console.log(`Haloo ${this.nama}, selamat makan. Energi anda sebesaar ${this.energi}`);
//    }
//    this.main  =function (jam) {
//      this.energi -= jam;
//      console.log(`Hallo ${this.nama}, selamat bermain`);
//    }

//   }

//   let nico = new Mahasiswa('Nico', 10);
//   let gulo = new Mahasiswa('Gulo',20);


// todo Property
// function Mahasiswa(nama, energi) {

//   this.nama = nama;
//   this.energi = energi;

// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Hallo ${this.nama}, Selamat makan, Energi anda sekrang ${this.energi}`;
// }

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Hallo ${this.nama}, Anda sedang main, Energi anda sekrang ${this.energi}`;

// }

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Hallo ${this.nama}, Selamat tidur, Energi anda akan bertambah  menjadi ${this.energi}`;

// }
// let nico = new Mahasiswa('Nico', 10);
// let Gulo = new Mahasiswa('Gulo', 12);


// todo versi class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan = function (porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama}, Selamat makan, Energi anda sekrang ${this.energi}`;
  }

  main = function (jam) {
    this.energi -= jam;
    return `Hallo ${this.nama}, Anda sedang main, Energi anda sekrang ${this.energi}`;

  }

  tidur = function (jam) {
    this.energi += jam * 2;
    return `Hallo ${this.nama}, Selamat tidur, Energi anda akan bertambah  menjadi ${this.energi}`;

  }
}

let nico  = new Mahasiswa('Nico', 10);


// todo Object.create