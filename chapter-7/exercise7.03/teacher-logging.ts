// creating a constructor wrapping decorator 

@LogClass("Teacher decorator")
class Teacher2 {
     constructor(public id: number, public name: string) {
        console.log("constructing a teacher");
     }
}

const teacher2 = new Teacher2(1, " John");

type constructable = {new (...args: any[]): {}};

function LogClass(message: string) {
    return function <T extends constructable>(constructor: T) {
        const loggingConstructor: any = function(...args: any[]){
            logger.info(message);
            return new constructor(...args);
        }
        loggingConstructor.prottotype = constructor.prototype;
        return loggingConstructor;
    };
}

const logger = {
    info: (message: string) => {
        console.log(`[INFO]: ${message}`);
    },
};

for (let index = 0; index < 10; index++) {
    const teacher = new Teacher2(index +1, "LouAnne JOhnson");
}