const stdDev = require('./StdDeviation')
const {std_deviation} = require('./native')
const {performance} = require('perf_hooks')

test('Checking Validity of JS test', () => {
    let t0 = performance.now();
    expect(stdDev([10,12,23,23,16,23,21,16])).toBe(5.237229365663817);
    let t1 = performance.now();
    console.log("JS code took " + (t1-t0) + " milliseconds.");
});

test('Checking Validity of RS test', () => {
    let testArray = [10,12,23,23,16,23,21,16];
    const typedArray = new Float64Array(testArray);
    let t0 = performance.now();
    expect(std_deviation(typedArray)).toBe(5.237229365663817);
    let t1 = performance.now();
    console.log("RS code took " + (t1-t0) + " milliseconds.");
});

let testArr = [];
for (let i = 0; i < 2000000; i++){
    testArr[i] = Math.floor(Math.random() * i);
}
const typedTestArray = new Float64Array(testArr);

test('Checking Timing of JS test', () => {
    let t0 = performance.now();
    stdDev(testArr);
    let t1 = performance.now();
    console.log("JS code took " + (t1-t0) + " milliseconds.");
});

test('Checking Timing of RS test', () => {
    let t0 = performance.now();
    std_deviation(typedTestArray);
    let t1 = performance.now();
    console.log("RS code took " + (t1-t0) + " milliseconds.");
});