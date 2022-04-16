const removeFromArray = function(array) {
    const args = Array.prototype.slice.call(arguments, 1);
    const filteredArray = [];
    array.forEach( (item) => {
        if (!args.includes(item)){
            filteredArray.push(item);
        }
    }

    )
    return filteredArray;
};
// Do not edit below this line
module.exports = removeFromArray;
