window.addEventListener('load', () => {


   
    const noantrian = sessionStorage.getItem('NOANTRIAN');
    const nama = sessionStorage.getItem('NAMA');
    
    document.getElementById('noantrian').innerHTML = noantrian;
    document.getElementById('nama').innerHTML = nama;
  

})