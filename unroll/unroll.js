function unroll(squareArray) {
    if(!squareArray || !squareArray.length) {return undefined}
    for(let sqare of squareArray){
        if(sqare.length !== squareArray.length){
            return undefined;
        }
    };
    const len = squareArray.length;
    let res = [];
    while(squareArray.length > 0){
        // spread the first array in order
        res.push(...squareArray.shift())
        if(squareArray.length === 0){break}

        // grab the last element of all arrays
        squareArray.forEach((arr) => {
            res.push(arr.pop())
        })
        if(squareArray.length === 0){break}

        // get the bottom array revered
        res.push(...squareArray.pop().reverse());
        if(squareArray.length === 0){break}

        // get first element of each array, from last to first
        res.push(...squareArray.map((arr) => arr.shift()).reverse());
    }
    


    return res;
}

module.exports = unroll;
