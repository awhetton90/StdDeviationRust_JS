function stdDeviation(popVals) {
    var popStdDev
    var mean
    var popSize = popVals.length

    /* Make sure the population size value is valid */
    if (popSize <= 0) {
        return -1
    }

    mean = getMean(popVals)

    popStdDev = popVals.reduce(function(sum, val){
        return sum + Math.pow(val - mean, 2)
    }, 0) / (popSize - 1);

    return Math.sqrt(popStdDev);
}

function getMean(popVals){
    return popVals.reduce(function(a,b){
        return a + b;
    }, 0) / popVals.length;
}

module.exports = stdDeviation;
