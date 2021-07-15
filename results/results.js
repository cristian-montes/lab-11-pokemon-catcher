import pokemonInfo from '../data/pokemonData.js';
import { getPokedex, findById } from '../storage-utils.js';

const secTion = document.getElementById('main-section');
const playAgainBtn = document.getElementById('play-again-btn');

//EMPTY [] TO STORE DATA FROM BELOW LOOP
let shown = [];
let prefered = [];
let names = [];


//CREATE RESUTLS 
const pokeData = getPokedex();
for (let item of pokeData){

    const pokemonPicked = findById(pokemonInfo, item.id);
    shown.push(item.shown);
    prefered.push(item.prefered);
    names.push(pokemonPicked.pokemon);

    const div1 = document.createElement('div');
    div1.classList.add('result');

    const pokeImage = document.createElement('img');
    pokeImage.src = pokemonPicked.url_image;
    div1.appendChild(pokeImage);

    const shownPrg = document.createElement('p');
    shownPrg.textContent = `Appeared ${item.shown}`;
    div1.appendChild(shownPrg);

    const preferedPrg = document.createElement('p');
    preferedPrg.textContent = `Caught ${item.prefered}`;
    div1.appendChild(preferedPrg);

    const namePrg = document.createElement('p');
    namePrg.textContent = pokemonPicked.pokemon;
    div1.appendChild(namePrg);

    secTion.appendChild(div1);
}

//CREATE GRAPH  FOR RESULTS
let ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: names,
        datasets: [{
            label: names,
            data: shown,
            backgroundColor: [
                '#51e5ffff', '#154c79', '#eab676', '#76b5c5', '#e28743', '#5bbce5', '#c34367', '#c7ce81', '#1c4feb', '#31cb8f', '#5e6933', '', ''
            ],
            borderWidth: 1,
            hoverOffset: 10
        },
        {
            label: names,
            data: prefered,
            backgroundColor: [
                '#440381ff', '#b6007d', '#b6e17d', '#f2c811', '#8098f2', '#8591e2', '#848eef', '#cc3b3b', '#ff6666', '#0a75ad', '#bada55'
            ],
            borderWidth: 1,
            hoverOffset: 10
        }]
        
    },
    options: {
        title: {
            text: 'POKEMON CHART',
            display: true
        }
    }
});

// PLAY AGAIN BUTTON
playAgainBtn.addEventListener('click', () => {
    localStorage.removeItem('RESULTS'); 
    window.location.replace('../index.html');
});