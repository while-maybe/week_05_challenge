"use strict";

const fs = require("fs");
const path = require("path");

const fileName = "./log.txt";
// import all exported definitions from "operations.js"
const calc = require('./calculator.js');
const { tryStatement } = require("@babel/types");

// import fs from "fs";
// import path from "path";
// import * as calc from "./operations.js";

// let message = ["0", "/", "0"];
const message = process.argv.slice(2);

// Check if a message was provided
if (!message) {
    console.log("Please provide a message as a command-line argument.");
    process.exit(1); // Exit the process if no message is provided
}

let [n1, op, n2] = message;
n1 = Number(n1);
n2 = Number(n2);

try {
    operandsValid(n1, n2);
    operatorValid(op);
}
catch (e) {
    switch(e.message) {
        case "Operands must be valid numbers": {
            console.log("Operands must be valid numbers");
            // process.exit(1);
        }
        case "Unknown operation": {
            console.log("Unknown operation");
            // process.exit(1);
        }
    }
    // console.log("Operands must be valid numbers");
}


// console.log(operandsValid(n1, n2) && operatorValid(op));

let result;
switch (op) {
    case '+': {
        result = calc.add(n1, n2);
        break;
    }
    case '-': {
        result = calc.subtract(n1, n2);
        break;
    }
    case '*': {
        result = calc.multiply(n1, n2);
        break;
    }
    case '/': {
        result = calc.divide(n1, n2);
        break;
    }
}

// if result contains 'undefined' (if it fails the validateOperands in the calculator then output an error) - call nullish coalescing operator so we prevent results of 0 being interpreted as false positives

// result ?? "Operators have to be both numbers";

const output = `${n1} ${op} ${n2}`.concat(!isNaN(result) && Math.abs(result) !== Infinity ? ` = ${result}` : ` [ERROR -> Can't divide by zero]`);

const filePath = path.join(__dirname, fileName);

fs.appendFile(filePath, output.concat("\n"), (err) => {
    if (err) {
        console.error(`${output} [ERROR]`, err);
        return;
    }
    console.log(`${output} [SAVED IN ${fileName}]`);
});

//     return operandsValid(a, b) ? a + b : undefined;
function operandsValid(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Operands must be valid numbers");
    }
    return true;
}

function operatorValid(x) {
    if (!["+", "-", "*", "/"].includes(x)) {
        throw new Error("Unknown operation");
    }
    return true;
}

module.exports = { operandsValid, operatorValid };
