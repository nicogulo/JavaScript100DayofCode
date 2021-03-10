function handleSubmit () {
    const noantrian = document.getElementById('noantrian').value;
    const nama = document.getElementById('nama').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("NOANTRIAN", noantrian);
    sessionStorage.setItem("NAMA", nama);

    return;
}
function maketextnumber(n) {

    for (var r = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], e = n, t = new Array, a = 0; a <= e - 1; a++) {

        t[a] = r[parseInt(Math.random() * r.length)];

        t = t;

        randomtextnumber = t.join("")

    }

}

var hasil = document.getElementById("hasil-output");

hasil.innerHTML = (maketextnumber(6), randomtextnumber);
