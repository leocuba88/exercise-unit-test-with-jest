const fromDollarToYen = (dollar)  => {
    yen = dollar*109.8;
    return yen;
}

const fromEuroToDollar = (euro)  => {
    dollar = euro*1.2;
    return dollar;
}

const fromYanToPound = (yen)  => {
    pound = yen*0.0066;
    return pound;
}

console.log(fromDollarToYen(10))
console.log(fromEuroToDollar(10))
console.log(fromYanToPound(10))

module.exports = {fromDollarToYen, fromEuroToDollar, fromYanToPound}