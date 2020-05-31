'use strict';

const test = require('ava');
const sumConsecutiveNumbersInArray = require('../src/sumConsecutiveNumbersInArray.js').sumConsecutiveNumbersInArray;
 
test('a first test', t => {
    const inputArray = [1,4,4,4,0,4,3,3,1];
    const outputArray = [1,12,0,4,6,1];
    const result = sumConsecutiveNumbersInArray(inputArray);

    console.log("My Result is ");
    console.log(result);
    console.log("I expected:" );
    console.log(outputArray);
    t.deepEqual(sumConsecutiveNumbersInArray(inputArray), outputArray);
})
