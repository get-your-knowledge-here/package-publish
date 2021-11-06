function isOdd(num) {
    if (typeof num !== 'number') {
        throw new Error('num value should be of type number');
    }

    return num % 2 !== 0;
}

module.exports = { isOdd };
