const sumConsecutiveNumbersInArray = require('../src/sumConsecutiveNumbersInArray.js').sumConsecutiveNumbersInArray;
const stringToMorseCode = require('../src/morseCodeEncryption').stringToMorseCode;
const sumNestedArray = require('../src/sumNestedArrays.js').sumNestedArray;

switch(process.argv[2])
{
    case '0':
        const morseCodeInput = 'hello world'; //.... . .-.. .-.. --- .-- --- .-. .-... -..
        console.log('Converted Morse code:',  stringToMorseCode(morseCodeInput));
        break;
    case '1':
        const sumConsecutiveNumberInput = [1,4,4,4,0,4,3,3,1];
        console.log('Sum consecutive number:', sumConsecutiveNumbersInArray(sumConsecutiveNumberInput));
        break;
    case '2':
        const nestedArrayInput = [[0, 1], [2, 3], [4, 5]];
        console.log('Sum of nested array is:', sumNestedArray(nestedArrayInput));
        break;                
}
