// Creating a memoize function that uses generics (takes in a function and returns a function of the same type)

type AnyFunction = (...args: any[]) => any;
type keyGetter<Fn extends AnyFunction> = (...args:Parameters<Fn>) => string;

function memoize<Fn extends AnyFunction>(fn: Fn, keyGetter?: keyGetter<Fn>) {
    const cache: Record<string, any> = {};

    return (...args: any[]) => {
        const key = (keyGetter || JSON.stringify)(args);

        if (!(key in cache)) {
            cache[key] = fn(...args);
        }

        return cache[key];
    };
} 

function expensiveCalculation(a: number, b: number){
    const timeout = 10000;
    const start = Date.now();
    while (Date.now() <= start + timeout);

    return a + b;
}

const memoizeExpensiveCalculation = memoize(expensiveCalculation);
memoizeExpensiveCalculation("not-a-number", 1);