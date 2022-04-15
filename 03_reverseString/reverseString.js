
const reverseString = function(toReverse) {
    let auxArray = toReverse.split('');
    let aLength = auxArray.length;
    
    let reversedString = auxArray.map( (char,index) => auxArray[aLength - 1 - index]);
    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
