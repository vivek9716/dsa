class MaxBinaryHeap {

    elements: number[];
    size: number;

    constructor () {
        this.elements = [];
        this.size = 0;
    }

    insert(data: number) {
        this.elements.push(data);
        this.size += 1;
        this.bubbleUp();
    }

    bubbleUp () {
        let i = this.size - 1;
        while (i > 0) {
            let pi = Math.floor(i / 2);
            if (this.elements[i] > this.elements[pi]) {
                this.swap(i, pi);
                i = pi;
            } else {
                break;
            }
        }
    }


    swap (first: number, second: number) {
        let temp = this.elements[first];
        this.elements[first] = this.elements[second];
        this.elements[second] = temp;
    }

    print() {
        for (let i = 0; i <= Math.ceil(this.size / 2) - 1; i++) {
            console.log(`Parent : ${this.elements[i]} L : ${this.elements[2*i+1]}, R: ${this.elements[2*i+2]}`);
        }
    }

    heapify(pos: number) {
        let L = 2 * pos + 1;
        let R = 2 * pos + 2;
        let largest = pos;
        if (L < this.size && this.elements[L] > this.elements[largest]) {
            largest = L;
        }

        if (R < this.size && this.elements[R] > this.elements[largest]) {
            largest = R;
        }

        if (largest != pos) {
            this.swap(pos, largest);
            this.heapify(largest);
        }

    }

    extractMax() {
        let max = this.elements[0];
        if (this.size > 0) {
            this.swap(0, this.size - 1);
            this.elements.pop();
            this.size -= 1;
            this.heapify(0);
        }
        return max;
    }

    isEmpty() {
      return this.size <= 0;  
    }


}

const maxHP = new MaxBinaryHeap();
let arr = [8, 1, 6, 3, 5, 9, 10, 5];
for (let i = 0; i <= arr.length - 1; i++) {
    maxHP.insert(arr[i]);
}

while(!maxHP.isEmpty()) {
    console.log(maxHP.extractMax());
}