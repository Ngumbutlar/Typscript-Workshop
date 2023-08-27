
class User1{
    private userName: string;
    private token: string = '';
    readonly timeStamp: number = new Date().getTime();

    constructor(userName: string, token: string){
        this.userName = userName;
        this.token = token;
    }
    
    logOut(): void{
        this.userName = '';
        this.token = '';
    }

    getUser() {
        return{
            userName: this.userName,
            token: this.token,
            createdAt: this.timeStamp
        }
    }

    protected renewToken (newToken: string) {
        this.token = newToken;
    }
}

class Cashier extends User1{
    balance: number = 0;
    float: number = 0;

    start(balance: number, float: number): void {
        this.balance = balance;
        this. float = float
    };
}

class Inventory extends User1{
    products: string [] = [];

    //override constructor method, add new prop
    constructor(userName: string, token: string, products:string[]){
        //call parent constructor method
        super(userName, token)
        //set new prop
        this.products = products;
    }
};

class FloorWorker extends Inventory {
    floorStock: string []= [];

    CheckOut(id: number){
        if(this.products.length >= 0) {
            this.floorStock.push(
                this.products[id]
            )
        }
    }
}

const basicUser = new User1('user1', '1234567ttt');
console.log(basicUser);

const cashUser = new Cashier('user2', '12345678');
console.log(cashUser)
cashUser.start(10, 1.5);
console.log(cashUser);

//init inventory
const iUser = new Inventory('user3', '123456789', ['orange', 'mango', 'playStation 2']);
console.log(iUser);

//Floorworker
const fUser = new FloorWorker('user4', '12345678', ['orange', 'mango', 'playStation 2']);
fUser.CheckOut(0);
console.log(fUser.products);
console.log(fUser.floorStock);