
class Teacher3 {
    constructor (public name: string) {}

    private _title: string = "";

    @Enumerable(true)
    public get title() {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    @Enumerable(true)
    public teach() {
        console.log(`${this.name} is teaching`)
    }
}

const teacher3 = new Teacher3("John");
for (const key in teacher3) {
    console.log(key);
}

function Enumerable(value: boolean) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value;
    }
};