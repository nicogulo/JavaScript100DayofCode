// Template literal / Template String

// const nama = 'Nico';
// const umur = 22;
// console.log(`Hallo nama saya ${nama}, umur saya ${umur}`);

// Embedded Expression
// console.log(`${1 + 1}`);


// // * HTML Fragment
// const mhs = {
//     nama: 'Nico',
//     umur: 22,
//     nim: 2021731333,
//     email: 'nico1731333@irpln.ac.id'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;

// console.log(el);


// ! HTML  Fragment


const mhs = {
    nama: 'Nico',
    umur: 22,
    nim: '201731333',
    email: 'nicogulobelas@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

document.body.innerHTML = el;