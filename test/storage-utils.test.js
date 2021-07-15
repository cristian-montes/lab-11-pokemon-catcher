// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { encounterPokemon, getPokedex, setPokedex, capturedPokemon, wholeResults } from '../storage-utils.js';
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
    
    let results = getPokedex();

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
    setPokedex(testResults);
    // Call the function you're testing and set the result to a const
    encounterPokemon(1);
    
    let results = getPokedex();
    const expected = [{
        id: 1,
        shown: 2,
        prefered: 0
    }];
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results, expected);
});


// GETPOKEDEX FUNCTION TEST

test('GETPOKEDEX should return parsed results if in localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const testResults = {
        id: 1,
        shown: 1,
        prefered: 1
    };
    
    setPokedex(testResults);

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, testResults);
});
test('GETPOKEDEX should return [] if not in localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const testResults = [];
    
    setPokedex(testResults);

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, testResults);
});

// SETPOKEDEX FUNCTION TEST

test('SETPOKEDEX should return stringfied restuls if in localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const testResults = [{
        id: 1,
        shown: 1,
        prefered: 1
    }];
    
    setPokedex(testResults);

    //Act 
    // Call the function you're testing and set the result to a const

    const expectedResults = [{
        id: 1,
        shown: 1,
        prefered: 1
    }];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expectedResults, testResults);
});


test('CAPTUREPOKEMON should  increment the preffered if POKEMON chose by user', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const testResults = [{
        id: 1,
        shown: 1,
        prefered: 0
    }];
    setPokedex(testResults);
    //Act 
    // Call the function you're testing and set the result to a const
    capturedPokemon(1);
    
    let results = getPokedex();
    const expected = [{
        id: 1,
        shown: 1,
        prefered: 1
    }];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results, expected);
});

test('WHOLERESULTS should whoe the whole number of shown and caught', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const testResults = [1, 2, 3, 4, 5];
    const results = wholeResults(testResults);
    
    const expected = 15;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results, expected);
});