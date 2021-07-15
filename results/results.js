import pokemonInfo from '../data/pokemonData.js';
import { getPokedex, findById } from '../storage-utils.js';

const secTion = document.getElementById('main-section');

let shown = [];
let prefered = [];
let names = [];

const pokeData = getPokedex();

for (let item of pokeData){

    const pokemonPicked = findById(pokemonInfo, item.id);
    shown.push(item.shown);
    prefered.push(item.prefered);
    names.push(pokemonPicked.name);

    const div1 = document.createElement('div');
    div1.classList.add('result');

    const pokeImage = document.createElement('img');
    pokeImage.src = pokemonPicked.url_image;
    div1.appendChild(pokeImage);

    const shownPrg = document.createElement('p');
    shownPrg.textContent = `shown ${item.shown}`;
    div1.appendChild(shownPrg);

    const preferedPrg = document.createElement('p');
    preferedPrg.textContent = `Prefered ${item.prefered}`;
    div1.appendChild(preferedPrg);

    const namePrg = document.createElement('p');
    namePrg.textContent = pokemonPicked.name;
    div1.appendChild(namePrg);

    secTion.appendChild(div1);


}

// let ctx = document.getElementById('myChart').getContext('2d');