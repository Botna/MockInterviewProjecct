'use strict';
//[1,4,4,4,0,4,3,3,1] => [1,12,0,4,6,1]
const sumConsecutiveNumbersInArray = (nestArray) => {
    let outputArray = [];
    let i;
    let memory = 0;
    for(i = 0; i < nestArray.length; i ++) {
        console.log(nestArray[i])
        let valueAtI = nestArray[i]
        let valueAtNext = nestArray[i + 1]
        
        if(valueAtI === valueAtNext){
            memory = valueAtI + memory;
        } else {
            if(memory > 0) {
                memory = valueAtI + memory;
                outputArray.push(memory);
                memory = 0;
            } else {
                outputArray.push(valueAtI)
            }
        }
    };
    return outputArray;
};
 
module.exports = {sumConsecutiveNumbersInArray}