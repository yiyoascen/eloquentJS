//an arrow function example. The parameters go before the arrow like stating “this input (the parameters) produces this result (the body)”.
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
const horn = () => {
    console.log('toot');
};