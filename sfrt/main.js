const body = document.body;
const btn1 = document.getElementById('btn1');

const kliksaya = 'Klik saya 1';
btn1.textContent = kliksaya;

let newText = null;

function tampilteks() {
    if (!newText) {
        newText = document.createElement('p');
        newText.textContent = 'Halo World';
        newText.style.color = 'red';
        body.append(newText);
    } else {
        newText.style.color = 'red'; // ubah warna jadi merah lagi kalau udah ada
    }
}

function gantiwarna() {
    if (newText) {
        newText.style.color = 'blue';
        newText.style.background = 'tomato';
    }
}


// istilahnya yang let newText = null itukan dia nilainya kosong (teks nya gak ada)
// baru di function tampilteks itu, jika nilai newText tidak ada maka buat element p dan isi teksnya Halo World
// dan kasih teks warna merah, lalu tampilkan ke halaman body

// baru yang gantiwarna kan teksnya udah ada tu, jadi (jika newText sudah ada nilainya maka ubah warnanya jadi biru)

//nah disini tu kan awalnya dia let berarti bisa diubah
// beda dengan const nilai nya tu constant alias gak boleh di rubah