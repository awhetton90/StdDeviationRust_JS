const stdDev = require('./StdDeviation')
const {std_deviation} = require('./native')
const {performance} = require('perf_hooks')

test('Checking Validity of JS test', () => {
    var t0 = performance.now();
    expect(stdDev([10,12,23,23,16,23,21,16])).toBe(5.237229365663817);
    var t1 = performance.now();
    console.log("JS code took " + (t1-t0) + " milliseconds.");
});

test('Checking Validity of RS test', () => {
    var t0 = performance.now();
    expect(std_deviation([10,12,23,23,16,23,21,16])).toBe(5.237229365663817);
    var t1 = performance.now();
    console.log("RS code took " + (t1-t0) + " milliseconds.");
});

var testArr = [];
for (var i = 0; i < 2000000; i++){
    testArr[i] = Math.floor(Math.random() * i);
}

test('Checking Timing of JS test', () => {
    var t0 = performance.now();
    stdDev(testArr);
    var t1 = performance.now();
    console.log("JS code took " + (t1-t0) + " milliseconds.");
});

test('Checking Timing of RS test', () => {
    var t0 = performance.now();
    std_deviation(testArr);
    var t1 = performance.now();
    console.log("RS code took " + (t1-t0) + " milliseconds.");
});