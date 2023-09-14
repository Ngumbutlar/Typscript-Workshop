
// simple decorator factory that wil provide each property with a description

class Teacher5 {

    @Description("This is the id of the teacher")
    public id: number;

    @Description("Thsi is the name of the teacher")
    public name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}

//decorator factory
function Description(message: string) {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata("description", message, target, propertyKey)
    }
}

function showDescriptions (target:any) {
    for(const key in target) {
        if(Reflect.hasMetadata("description", target, key)) {
            const description = Reflect.getMetadata("desription", target, key);
            console.log(` ${key}: ${description}`);
        }
    }
}

const teacher5 = new Teacher5(1, "John Smith");
showDescriptions(teacher5);