class HeapSort {

    arr: number[] = [];

    heapify(n: number, i: number) {
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        let largest = i;
        if (l <= n && this.arr[l] > this.arr[largest]) {
            largest = l;
        }
        if (r <= n && this.arr[r] > this.arr[largest]) {
            largest = r;
        }

        if (largest != i) {
            let temp = this.arr[largest];
            this.arr[largest] = this.arr[i];
            this.arr[i] = temp;
            this.heapify(n, largest);
        }
    }

    insert(data: number) {
        console.log("Data: ", data);
        this.arr.push(data);
        let parentNode = Math.floor(this.arr.length / 2) - 1;
        let currentIndex = this.arr.length - 1;
        console.log("Before: ", this.arr);
        while (currentIndex > 0 && this.arr[currentIndex] > this.arr[parentNode]) {
            let temp = this.arr[currentIndex];
            this.arr[currentIndex] = this.arr[parentNode];
            this.arr[parentNode] = temp;
            console.log("Swap: ", this.arr);    
            currentIndex = parentNode;
            parentNode = Math.max(Math.floor(currentIndex / 2) - 1, 0);
        }
        console.log("After: ", this.arr);
    }

    

    heapAll() {

        let pNodes = Math.floor(this.arr.length/2) - 1;
        for (let i = pNodes; i >= 0; i--) {
            this.heapify(this.arr.length - 1, i);
        }
        for (let i = this.arr.length - 1; i > 0; i--) {
            this.heapify(i, 0);
            let temp = this.arr[0];
            this.arr[0] = this.arr[i];
            this.arr[i] = temp;
        }
    }

    getMini() {
        return this.arr[0];
    }

    extractMin() {
        if (this.arr.length === 0) {
            console.log("Undeflow");
            return null;
        }
        let min = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.pop();
        if (this.arr.length > 1) {
            this.heapAll();
        }
        return min;
    }

    print() {
        let pNodes = Math.floor(this.arr.length/2) - 1;
        for (let i = 0; i <= pNodes; i++) {
            console.log(`Parent: ${this.arr[i]}, Left: ${this.arr[2*i+1]}, Right: ${this.arr[2*i+2] ? this.arr[2*i+2] : null}`);
        }
    }

}

const hs = new HeapSort();
hs.insert(5);
hs.insert(15);
hs.insert(1);
hs.insert(30);
// hs.insert(40);
// hs.insert(35);
// console.log("Minimum Element is : ", hs.getMini());
// console.log("Extracted Element is : ", hs.extractMin());
// console.log("Minimum Element is : ", hs.getMini());
// console.log("Extracted Element is : ", hs.extractMin());
// console.log("Extracted Element is : ", hs.extractMin());
// console.log("Extracted Element is : ", hs.extractMin());
// console.log("Extracted Element is : ", hs.extractMin());
// console.log("Extracted Element is : ", hs.extractMin());
// console.log("Extracted Element is : ", hs.extractMin());
// hs.insert(35);
//console.log(hs.arr);
//hs.print();