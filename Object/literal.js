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


// const mhs = {
//     nama: 'Nico',
//     umur: 22,
//     nim: '201731333',
//     email: 'nicogulobelas@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;


// ! Looping
// const mhs= [
//     {
//         nama: 'nico',
//         email: 'nico@gmail.com'
//     },
//     {
//         nama: 'alfiain',
//         email: 'alfian@gmail.com'
//     },
//     {
//         nama: 'gulo',
//         email: 'gulo@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>` ).join('')}
// </div>`;

// document.body.innerHTML = el;



// ! Conditional
// const music  = {
//     tittle: 'You',
//     singer: 'Mahalu',
//     feat: 'Maeda'
// }

// const el = `<div class="music">
//     <ul>
//         <li>${music.singer}</li>
//         <li>${music.tittle} ${music.feat ? `(feat. ${music.feat})` : ''}</li>
//     </ul>
// </div>`

// document.body.innerHTML = el;

// ! Nested

// const mhs = {
//     nama: 'nico',
//     semester: 5,
//     matakuliah: ['RPL', 'WEB', 'KALKULUS', 'PBO']
// };

// function cetakMatakuliah (matakuliah) {
//     return `
//     <ol>
//         ${matakuliah.map(mk => `<li>${mk}</li>`).join('' )}
//     </ol>
//     `
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester ${mhs.semester}</span>
//     <h4>Matakuliah: </h4>
//     ${cetakMatakuliah(mhs.matakuliah)}
// </div>`;



// document.body.innerHTML = el;




// ! Tagged templates

const nama = 'Nico';
const umur = 22;

function test (strings, ...values){
    let result = '';
    strings.forEach((str, i) =>{
        result += `${str}${values[i] || ''}`;
    });
    return result;
}

const str = test `Hallo nama saya ${nama}, umur saya ${umur} tahun`;
console.log(str);