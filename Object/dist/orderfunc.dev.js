"use strict";

// function kerjakanTugas(matakuliah, selesai){
//   console.log(`Mulai Mengerjakan tugas ${matakuliah}...`);
//   selesai();
// }
// function selesai(){
//   // setInterval( function(){
//   //   ('Selesai mengerjakan tugas !');
//   // }, 500);
//   // return ;
//   alert('Selesai mengerjakan tugas !');
// }
// kerjakanTugas('Pemrograman Web', selesai); 
// let total = 0, count = 1;
// while(count <= 10){
//   total += count;
//   count += 1;
// }
// console.log(total);

/* Filter */
var angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]; // mencari angka >3
// For
// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
//   if(angka[i]>=3){
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);
// Filter
// const newAngka = angka.filter((a) => a >= 3 );
// console.log(newAngka);

/* Map */
// kalikan angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

/* Reduce */
// jumlahkan seluruh pada array
// const newAngka = angka.reduce((accumulator, curentvalue) => accumulator + curentvalue);
// console.log(newAngka);

/* method Chaining */
// Cari angka > 5
// hasilnya kali 3
// jumlahkan

var hasil = angka.filter(function (a) {
  return a > 5;
}) //8, 9, 9
.map(function (a) {
  return a * 3;
}) // 24, 27, 27
.reduce(function (acc, cur) {
  return acc + cur;
}); //78

console.log(hasil);