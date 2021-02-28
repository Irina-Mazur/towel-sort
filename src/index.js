
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!Array.isArray(matrix)){
        return [];  
    }

    return matrix.reduce((accumulator, currValue, index) => {
        if (index % 2 == 0) {
            accumulator.push(...currValue)
        } else {
            accumulator.push(...currValue.reverse())
        };
        return accumulator;
    }, []);   
};


