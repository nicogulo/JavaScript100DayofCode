"use strict";

function kerjakanTugas(matakuliah, selesai) {
  console.log("Mulai Mengerjakan tugas ".concat(matakuliah, "..."));
  selesai();
}

function selesai() {
  // setInterval( function(){
  //   ('Selesai mengerjakan tugas !');
  // }, 500);
  // return ;
  alert('Selesai mengerjakan tugas !');
}

kerjakanTugas('Pemrograman Web', selesai);