class Stack {

    items: any;
    size: number;

    constructor() {
        this.size = 0;
        this.items = [];
    }

    push(data: any) {
        this.items.push(data);
        this.size += 1;
    }

    pop() {
        if(this.isEmpty()) return -1;
        this.items.pop(this.size - 1);
        this.size -= 1;
    }

    peek() {
        if(this.isEmpty()) return -1;
        return this.items[this.size - 1];
    }

    isEmpty() {
        return this.size <= 0;
    }

    printStack() {
        if (this.isEmpty()) {
            return "Empty";
        }
        for (let i = this.size - 1; i >= 0; i--) {
            console.log(`Stack Item @ ${this.size - 1 - i}`, this.items[i]);
        }
    }

}

const s = new Stack();
export default s;