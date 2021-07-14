
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

    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);
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

    localStorage.setItem('RESULTS', JSON.stringify(results));

}

// CAPTUREPOKEMON FUNCTION

export function capturePokemon(id){
    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);
    const pokemon = findById(results, id);

    if (!pokemon){
        const newItem = {
            id: id,
            shown: 0,
            prefered: 1
        };
        results.push(newItem);
        //else update the shown key
    } else {
        pokemon.prefered++;
    }

    localStorage.setItem('RESULTS', JSON.stringify(results));

}