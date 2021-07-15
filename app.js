// import functions and grab DOM elements
import pokemonInfo from './data/pokemonData.js';
import { encounterPokemon, capturedPokemon } from './storage-utils.js';

const pokemon1Radio = document.getElementById('pokemon1-radio');
const pokemon1Image = document.getElementById('pokemon1-img');

const pokemon2Radio = document.getElementById('pokemon2-radio');
const pokemon2Image = document.getElementById('pokemon2-img');

const pokemon3Radio = document.getElementById('pokemon3-radio');
const pokemon3Image = document.getElementById('pokemon3-img');

const catchBtn = document.getElementById('catch-btn');


// INITIALIZE STATE
let totalPlays = 0;

// FUNCTION TO RANDOMLY SELECT POKEMONS
function renderRandomPokemon(){

    totalPlays++;

    let randomPoke1 = Math.floor(Math.random() * pokemonInfo.length);
    let randomPoke2 = Math.floor(Math.random() * pokemonInfo.length);
    let randomPoke3 = Math.floor(Math.random() * pokemonInfo.length);

    while (randomPoke1 === randomPoke2 || 
      randomPoke2 === randomPoke3 || 
      randomPoke3 === randomPoke1) {

        randomPoke1 = Math.floor(Math.random() * pokemonInfo.length);
        randomPoke2 = Math.floor(Math.random() * pokemonInfo.length);
        randomPoke3 = Math.floor(Math.random() * pokemonInfo.length);
    }

    let poke1 = pokemonInfo[randomPoke1];
    let poke2 = pokemonInfo[randomPoke2];
    let poke3 = pokemonInfo[randomPoke3];

    pokemon1Radio.value = poke1.id; 
    pokemon1Radio.checked = false;
    pokemon1Image.src = poke1.url_image; 

    pokemon2Radio.value = poke2.id; 
    pokemon2Radio.checked = false;
    pokemon2Image.src = poke2.url_image; 

    pokemon3Radio.value = poke3.id; 
    pokemon3Radio.checked = false;
    pokemon3Image.src = poke3.url_image; 

    encounterPokemon(poke1.id);
    encounterPokemon(poke2.id);
    encounterPokemon(poke3.id);

}

localStorage.removeItem('RESULTS');
renderRandomPokemon();


// EVENT LISTENER CATCHBTN
catchBtn.addEventListener('click', () => {
    const prefered = document.querySelector('input[type=radio]:checked');
    const preferedId = Number(prefered.value);
    capturedPokemon(preferedId);
    if (totalPlays < 10) {
        renderRandomPokemon();
    } else {
        window.location.replace('./results');
    }
});



