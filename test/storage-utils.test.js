// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { capturePokemon, encounterPokemon } from '../storage-utils.js';
const test = QUnit.test;

test('showPokemon should create a results object if POKEMON not previously shown', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const testResults = {
        id: 1,
        shown: 1,
        prefered: 0
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    encounterPokemon(1);
    
    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results[0], testResults);
});




test('showPokemon should increment results object if pokemon previously shown', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const testResults = [{
        id: 1,
        shown: 1,
        prefered: 0
    }];
    localStorage.setItem('RESULTS', JSON.stringify(testResults));
    //Act 
    // Call the function you're testing and set the result to a const
    encounterPokemon(1);
    
    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);
    const expected = {
        id: 1,
        shown: 2,
        prefered: 0
    };
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results[0], expected);
});

// CAPTURE POKEMON FUNCTION TEST

test('capturePokemon shhould increment results object if POKEMON prefered', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const testResults = {
        id: 1,
        shown: 1,
        prefered: 1
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    capturePokemon(1);
    
    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results[0], testResults);
});
