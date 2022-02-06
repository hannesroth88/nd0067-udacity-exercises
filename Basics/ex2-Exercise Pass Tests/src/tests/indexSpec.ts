import arrays from "../utilities/arrays";
import numbers from "../utilities/numbers";
import strings from "../utilities/strings";

describe("Test Arrays", () => {
    it("ArrayTest 1", () => {
        let inputArray = [1, 7, 3]
        expect(arrays.lgNum(inputArray)).toEqual(7)
    });

    // will fail
     it("ArrayTest 2", () => {
        let inputArray = [1,0,3]
        expect(arrays.lgNum(inputArray)).toEqual(3)
    })

})


describe("Test Numbers", () => {
    it("Numbers 1", () => {
        expect(numbers.multiply(1,5)).toEqual(5)
    });
        
})


describe("Test strings", () => {
    it("Strings 1", () => {
        let result = strings.concat("123","456")
        expect(result.length).toEqual(6)
    });  
})