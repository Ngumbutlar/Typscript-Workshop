"use strict";
class User1 {
    constructor(userName, token) {
        this.token = '';
        this.timeStamp = new Date().getTime();
        this.userName = userName;
        this.token = token;
    }
    logOut() {
        this.userName = '';
        this.token = '';
    }
    getUser() {
        return {
            userName: this.userName,
            token: this.token,
            createdAt: this.timeStamp
        };
    }
    renewToken(newToken) {
        this.token = newToken;
    }
}
class Cashier extends User1 {
    constructor() {
        super(...arguments);
        this.balance = 0;
        this.float = 0;
    }
    start(balance, float) {
        this.balance = balance;
        this.float = float;
    }
    ;
}
class Inventory extends User1 {
    //override constructor method, add new prop
    constructor(userName, token, products) {
        //call parent constructor method
        super(userName, token);
        this.products = [];
        //set new prop
        this.products = products;
    }
}
;
class FloorWorker extends Inventory {
    constructor() {
        super(...arguments);
        this.floorStock = [];
    }
    CheckOut(id) {
        if (this.products.length >= 0) {
            this.floorStock.push(this.products[id]);
        }
    }
}
const basicUser = new User1('user1', '1234567ttt');
console.log(basicUser);
const cashUser = new Cashier('user2', '12345678');
console.log(cashUser);
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
