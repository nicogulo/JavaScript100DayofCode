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

// const hasil = angka.filter(a => a > 5) //8, 9, 9
//   .map(a => a * 3) // 24, 27, 27
//   .reduce((acc, cur) => acc + cur); //78

//   console.log(hasil);










// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));






// pilih hanya yang "JavaScript Lanjutan"

const jsLanjut = videos.filter(video => video.textContent.includes('JavaScript Lanjutan'))



// Ambil durasi masung masing video
.map(item => item.dataset.duration);

// ubah durasi menjadi int, ubah menjadi detik



//  jumlahkan semua detik

// ubah formatnya menjadi jam menit detik

// simpan DOM

console.log(jsLanjut);