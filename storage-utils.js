
// FIND BY ID FUNCTION
function findById(items, id){
    // loop through the items
    // if item's id is equal to the id parameter
    //   return the item
    for (const item of items){
        if (item.id === id) {
            return item;
        }
    }
}


// ENCOUNTERPOKEMON FUNCTION
export function encounterPokemon(id){

    const results = getPokedex();
    const pokemon = findById(results, id);

    // if not matching object create one
    if (!pokemon){
        const newItem = {
            id: id,
            shown: 1,
            prefered: 0
        };
        results.push(newItem);
        //else update the shown key
    } else {
        pokemon.shown++;
    }

    setPokedex(results);
}

// CAPTUREPOKEMON FUNCTION
export function capturedPokemon(id){
    const result = getPokedex();
    const pokemon = findById(result, id);
    pokemon.prefered++;
    setPokedex(result);
}

// GET POKEDEX RESULTS  OR GET RESULTS FUNCTION
export function getPokedex(){
    const stringRusults = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(stringRusults);
    return results;
}

// SET POKEDEX RESULTS OR SET RESULTS FUNCTION
export function setPokedex(resultArray){
    const setDex = localStorage.setItem('RESULTS', JSON.stringify(resultArray));
    return setDex;
}