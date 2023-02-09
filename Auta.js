let rokVyroby;
let znacka;
let model;
let kilometry;

let rokVyrobyInput = document.querySelector('#rokVyroby');
let znackaInput = document.querySelector('#znacka');
let modelInput = document.querySelector('#model');
let kilometryInput = document.querySelector('#kilometry');

function ulozitAuto() {
    rokVyroby = rokVyrobyInput.value;
    znacka = znackaInput.value;
    model = modelInput.value;
    kilometry = kilometryInput.value;

    let auto = {
        rokVyroby: rokVyroby,
        znacka: znacka,
        model: model,
        kilometry: kilometry
    }

    let auta = JSON.parse(localStorage.getItem('auta')) || [];
    auta.push(auto);
    localStorage.setItem('auta', JSON.stringify(auta));

}

let auta = JSON.parse(localStorage.getItem('auta')) || [];

let autaList = document.querySelector(".autaList");


function vypisAuta() {
    autaList.innerHTML = "";
    for (let i = 0; i < auta.length; i++) {
        let auto = auta[i];
        autaList.innerHTML += `
        <div class="auto">
            <div class="autoInfo">
                <h3>${auto.znacka} ${auto.model}</h3>
                <p>${auto.rokVyroby}</p>
                <p>${auto.kilometry}</p>
            </div>
        </div>
        `
    }
}



function vymazatAuta() {
    localStorage.clear();
    autaList.innerHTML = "";
}



let ulozit = document.querySelector(".ulozit").addEventListener("click", ulozitAuto);
let vymazat = document.querySelector(".vymazat").addEventListener("click", vymazatAuta);