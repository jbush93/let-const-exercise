const double = arr => arr.map(num => num * 2);

const squareAndFindEvens = arr => arr.map(num => num ** 2).filter(square => square % 2 === 0)