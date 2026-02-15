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
        newText.style.color = 'red'; 
    }
}

function gantiwarna() {
    if (newText) {
        newText.style.color = 'blue';
        newText.style.background = 'tomato';
    }
}

