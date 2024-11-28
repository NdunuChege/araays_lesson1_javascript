let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a/b;
let calculator = (operation, num1, num2) => {
    switch (operation) {
        case "add":
            return add(num1, num2);
            break;
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return; "invalid operation";
    }
}
console.log(add(2345,10));
console.log(subtract(35,12345));
console.log(multiply(3456,9876));
console.log(divide(12345,5));