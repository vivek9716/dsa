
interface Provider {
    data: number,
    priority: number
}


class QElements {

    data: number;
    priority: number;

    constructor(data: number, priority: number) {
        this.data = data, 
        this.priority = priority;
    }

}

class PriorityQueue {

    elements: Array<Provider>;
    size: number;

    constructor() {
        this.elements = [];
        this.size = 0;
    }

    enqueue(data: number, priority: number) {
        const node = new QElements(data, priority);
        this.size += 1;
        this.elements.push(node);
        this.bubbleUp();
    }

    bubbleUp() {
        let currentIndex = this.size - 1;
        if (currentIndex > 0) {
            let parentIndex = Math.floor(currentIndex / 2);
            while(this.elements[currentIndex].priority < this.elements[parentIndex].priority) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
        }
    }

    swap(first: number, second: number) {
        let temp = this.elements[first];
        this.elements[first] = this.elements[second];
        this.elements[second] = temp;
    }

    dequeue() {
        const min = this.elements[0];
        this.elements[0] = this.elements[this.size - 1];
        this.elements.pop();
        this.size -= 1;
        this.heapify(0);
        return min;
    }

    heapify(pos: number) {
        let l = 2 * pos + 1;
        let r = 2 * pos + 2;
        let min = pos;

        if (l < this.size && this.elements[l].priority === this.elements[min].priority) {
            if (this.elements[l].data > this.elements[min].priority) {
                min = l;
            }
        } else if (l < this.size && this.elements[l].priority < this.elements[min].priority) {
            min = l;
        }

        if (r < this.size && this.elements[r].priority === this.elements[min].priority) {
            if (this.elements[r].data > this.elements[min].priority) {
                min = r;
            }
        } else if (r < this.size && this.elements[r].priority < this.elements[min].priority) {
            min = r;
        }

        if (min != pos) {
            this.swap(min, pos);
            this.heapify(min);
        }


    }


}

const PQ = new PriorityQueue();

PQ.enqueue(2, 1);
PQ.enqueue(1, 3);
PQ.enqueue(4, 5);
PQ.enqueue(5, 6);
PQ.enqueue(7, 3);

while(PQ.size > 0) {
    console.log(PQ.dequeue());
}