import sum from "./sum.js";

describe('Tests sum', ()=>{
    test('additions', ()=> {
        const expectedResult = 3;
        const result = sum(1,2);
        expect(result).toBe(expectedResult) 
    })
    test('Ignores extra arguments', ()=> {
        const expectedResult = 3;
        const result = sum(1,2,3);
        expect(result).toBe(expectedResult) 
    })
})