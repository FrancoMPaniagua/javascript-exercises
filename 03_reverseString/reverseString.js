
const reverseString = function(toReverse) {
    let auxArray = toReverse.split('');
    aLength = auxArray.length;
    
    for (i = 0;i < Math.floor(aLength/2);i++) {
        let aux = auxArray[i];
        auxArray[i] = auxArray[aLength - 1 - i];
        auxArray[aLength - 1 - i] = aux;
    }
    return auxArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
