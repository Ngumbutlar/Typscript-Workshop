import 'reflect-metadata';

class Teacher6{

    public id: number;

    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    @Validate
    public getFullName(title: string, suffix: string) {
        return `${title} ${this.name} ${suffix}`
    }
}

function Required(target: any, propertyKey: string, parameterIndex: number) {
    if (Required.hasMetadata("required", target, propertyKey)) {
        const existing = Reflect.getMetadata("required", target, propertyKey) as number[];
        Reflect.defineMetadata("required", existing.concat(parameterIndex), target, propertyKey);
    } else {
        Reflect.defineMetadata("required", [parameterIndex], target, propertyKey)
    }
}

function Validate(target: any, propertyKey:string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        //validate parameters
        if(Reflect.hasMetadata("required", target, propertyKey)) {
            const requiredParams = Reflect.getMetadata("required", target, propertyKey) as number[];
            for (const required of requiredParams) {
                if(!args[required]) {
                    throw Error (`The parameter at position ${required} is required`)
                }
            }
        }
        return original.apply(this, args);
    }
}

const teacher6 = new Teacher6(2, " John Smith");
try{
    console.log(teacher6.getFullName("", "Esq"));
} catch (e) {
    console.log(e.message);
}