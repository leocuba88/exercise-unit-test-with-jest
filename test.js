test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 109.8 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 109.8; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(384.3); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})



test("One yen should be 0.0066 pounds", function(){
    //import the function from app.js
    const { fromYanToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromYanToPound(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 0.0066; 
    
    // this is the comparison for the unit test
     expect(fromYanToPound(3.5)).toBe(0.0231); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})