"use strict";
// implement a class that set data structure
class Set1 {
    constructor(initialItems) {
        this.items = initialItems;
    }
    get size() {
        return this.items.length;
    }
    has(item) {
        return this.items.includes(item);
    }
    add(item) {
        if (!this.has(item)) {
            this.items.push(item);
        }
    }
    remove(item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex >= 0) {
            this.items.splice(itemIndex, 1);
        }
    }
}
const set = new Set1([1, 2, 3]);
set.add(1);
set.add(5);
console.log(set);
