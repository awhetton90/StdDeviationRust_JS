const {std_deviation} = require('../native');

let testArray = [10,12,23,23,16,23,21,16];
const typedArray = new Float64Array(testArray);
console.log(std_deviation(typedArray));
