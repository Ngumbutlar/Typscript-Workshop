// implement a class that set data structure

class Set1<T> {
    private items: T[];

    constructor(initialItems: T[]) {
        this.items = initialItems;
    }

    get size(): number {
        return this.items.length;
    }

    has(item: T): boolean {
        return this.items.includes(item);
    }

    add(item: T): void {
        if (!this.has(item)) {
            this.items.push(item)
        }
    }

    remove(item: T): void {
        const itemIndex = this .items.indexOf(item);
        if (itemIndex >= 0) {
            this.items.splice(itemIndex, 1);
        }
    }
}

const set = new Set1 <number>([1, 2, 3]);
set.add(1)
set.add(5);
console.log(set);