const repeatString = function(input,num) {
    if (num < 0) {
        return 'ERROR';
    }
    else {
        let tempString = '';
        for (i = 0;i < num;i++) {
            tempString += input;
        }
        return tempString;
    }
};

// Do not edit below this line
module.exports = repeatString;
