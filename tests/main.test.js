const { operandsValid, operatorValid } = require("../main");

// test for invalid inputs
describe("Operator validation", () => {
    // test if any of the operands are not numbers an exception is thrown
    test("throws error if left operand is NaN", () => {
        expect(() => operandsValid("a", 100)).toThrow("Operands must be valid numbers");
    });
    test("throws error if right operand is NaN", () => {
        expect(() => operandsValid(100, "b")).toThrow("Operands must be valid numbers"); // 
    });
    test("throws error if both operands are NaN", () => {
        expect(() => operandsValid("a", "b")).toThrow("Operands must be valid numbers"); // 
    });
    // ok if both operands are numbers
    test("pass if both operands are numbers", () => {
        expect(operandsValid("1.234", "0")).toBe(true); // 
    });
});

// test for valid operators
describe("Operand validation", () => {
    // should Error operator is unknown
    test("throws error if operation is unknown", () => {
        expect(() => operatorValid("&")).toThrow("Unknown operation");
    });
    // should pass if operator is known
    test("pass if operator is known", () => {
        expect(operatorValid("+")).toBe(true); // 
    });
});
