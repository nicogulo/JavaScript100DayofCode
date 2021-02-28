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
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka >3


// For
// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
//   if(angka[i]>=3){
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// Filter
const newAngka = angka.filter((a) => a >= 3 );
console.log(newAngka);