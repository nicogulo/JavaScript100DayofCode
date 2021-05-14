// Callback
// Syncronus Callback

function halo(nama) {
  alert(`halo ${nama}`);
}
function tampilkanPesan(callBack) {
  const nama = prompt("Masukan Nama");
  callBack(nama);
}

tampilkanPesan(halo);
