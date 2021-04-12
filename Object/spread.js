// * Spread Operator

// memecah iterables menjadi single element


// digunakan untuk menggabungkan 2  array

// const mhs = ['nico', 'alfian', 'renaldy'];
// const dosen = ['gulo'];

// const orang = [...mhs, ...dosen ];
// console.log(orang);

// mencopy isi array
// const mhs = ['nico', 'alfian', 'renaldy'];
// const mhs1 = [...mhs];
// mhs1[0] = 'gulo';
// console.log(mhs1);



// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
  
// }


// * implement

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;