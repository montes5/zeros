module.exports = function getZerosCount(number) {
    var solution = 0;
    while(number > 0)
    {
        number = Math.floor(number/5);
        solution += number;
    }
    return solution;
}
