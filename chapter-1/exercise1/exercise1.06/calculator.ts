//Calculator function

enum Operator{
    Add = "add",
    Subtract = "subtract",
    Multiply = "multiply",
    Divide = "divide",
    Modulo ="modulo"
}

const calculator = function (first: number, second: number, op: Operator): number{
    const tuple = operations.find(tpl => tpl[0] == op);
    if (typeof tuple != 'undefined'){
        const operation = tuple[1];
        const result = operation(first, second);
        return result;
    }
    return 0
}

type Operation = (x: number, y: number) =>number;
const operations: [Operator, Operation][] = [];


const add = function (first: number, second: number): number{
    return first + second;
};
operations.push([Operator.Add, add]);

const subtract = function (first: number, second: number): number{
    return first - second;
};
operations.push([Operator.Subtract, subtract]);

const multiply = function (first: number, second: number): number{
    return first * second;
};
operations.push([Operator.Multiply, multiply]);

const divide = function (first: number, second: number): number{
    return first / second;
};
operations.push([Operator.Divide, divide]);

const modulo = function (first: number, second: number): number{
    return first % second;
};
operations.push([Operator.Modulo, modulo]);




console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Subtract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
console.log(calculator(14, 3, Operator.Modulo))