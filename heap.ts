class Heap {

    heap: object[]
    size: number;

    constructor () {
        this.size = 0;
        this.heap = [];
    }

    insert(data: object) {
        this.heap.push(data);
        this.size += 1;
    }

    build_maxheap() {
        let internalNode = Math.floor(this.size / 2) - 1;
        for (let i = internalNode; i >= 0; i--) {
            this.maxHeapify(this.size - 1, i);
        }
        
        for (let i = this.size - 1; i > 0; i--) {
            this.maxHeapify(i, 0);
            let temp = this.heap[0];
            this.heap[0] = this.heap[i];
            this.heap[i] = temp;
        }
        

    }

    maxHeapify(n: number, i: number) {
        let Left = 2 * i + 1;
        let Right = 2 * i + 2;
        let largest = i;

        if (Left <= n && this.heap[Left]['count'] < this.heap[largest]['count']) {
            largest = Left;
        }

        if (Right <= n && this.heap[Right]['count'] < this.heap[largest]['count']) {
            largest = Right;
        }

        if (largest != i) {
            let temp = this.heap[i];
            this.heap[i] = this.heap[largest];
            this.heap[largest] = temp;
            this.maxHeapify(n, largest);
        }

    }

    printHeap() {
        let internalNode = Math.floor(this.size / 2) - 1
        for (let i = 0; i <= internalNode; i++) {
            console.log("Parent : ", this.heap[i], " Left Child : ", this.heap[2 * i + 1], " Right Child : ", this.heap[2 * i + 2])
        }
    }

}

let maxHeap = new Heap();

let repeated = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5];

let hash = {};

for (let i = 0; i <= repeated.length - 1; i++) {
    if (Object.keys(hash).indexOf(repeated[i].toString()) == -1) {
        hash[repeated[i]] = 1;
    } else {
        hash[repeated[i]] += 1;
    }
}

let arr = Object.keys(hash).map((value) => {
    return {
        index: parseInt(value),
        count: hash[value]
    }
});

for (let i = 0; i <= arr.length - 1; i++) {
    maxHeap.insert(arr[i]);
}

maxHeap.build_maxheap();

console.log(maxHeap.heap);