const { add, subtract, multiply, divide } = require("../calculator");

describe("add validation", () => {
    // test add with zero, integers and floats
    test("test add with zero, integers and floats", () => {
        expect(add(0, 10)).toBe(10);
        expect(add(5.342, 0)).toBe(5.342);
        expect(add(-5, 10.34234)).toBe(5.34234);
        expect(add(5, -10)).toBe(-5);
        expect(add(-5, -10)).toBe(-15);
        expect(add(-5, -10.3423)).toBe(-15.3423);
    });
});

describe("subtract validation", () => {
    // test subtract with zero, integers and floats
    test("test subtract with zero, integers and floats", () => {
        expect(subtract(0, 10)).toBe(-10);
        expect(subtract(5.342, 0)).toBe(5.342);
        expect(subtract(-5, 10.34234)).toBe(-15.34234);
        expect(subtract(5, -10)).toBe(15);
        expect(subtract(-5, -10)).toBe(5);
        expect(subtract(-5, -10.3423)).toBe(5.3423);
    });
});

describe("multiply validation", () => {
    // test multiply with zero, integers and floats
    test("test multiply with zero, integers and floats", () => {
        expect(multiply(0, 10)).toBe(0);
        expect(multiply(5.342, 0)).toBe(0);
        expect(multiply(-5, 10.34234)).toBe(-51.7117);
        expect(multiply(5, -10)).toBe(-50);
        expect(multiply(-5, -10)).toBe(50);
        expect(multiply(-5, -10.3423)).toBe(51.7115);
    });
});

describe("divide validation", () => {
    // test divide with zero, integers and floats
    test("test add with zero, integers and floats", () => {
        expect(divide(0, 0)).toBe(NaN);
        expect(divide(0, 10)).toBe(0);
        expect(divide(-5, 10.34234)).toBe(-0.4834495868439831);
        expect(divide(5, -10)).toBe(-0.5);
        expect(divide(-5, -10)).toBe(0.5);
        expect(divide(-5, 0)).toBe(-Infinity);
        expect(divide(5, 0)).toBe(+Infinity);
        expect(divide(0, -10.3423)).toBe(-0);
    });
});
