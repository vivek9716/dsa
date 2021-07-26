import Stack from '@vivek-dsa/stack';

const stack = new Stack();

class NGR {

    private vector: number[] = [];

    getNextGreatestElements(arr: number[], n: number) {
        for (let i = n - 1; i >= 0; i--) {
            if (stack.isEmpty()) {
                this.vector.push(-1);
                stack.push(arr[i]);
            } else {
                if (stack.peek() > arr[i]) {
                    this.vector.push(stack.peek());
                    stack.push(arr[i]);
                } else {
                    while (!stack.isEmpty() && stack.peek() < arr[i]) {
                        stack.pop();
                    }
                    if (stack.isEmpty()) {
                        this.vector.push(-1);
                        stack.push(arr[i]);
                    } else {
                        this.vector.push(stack.peek());
                        stack.push(arr[i]);
                    }
                }
            }
        }
        return this.vector.reverse();
    }
}

const arr = [11, 13, 21, 3];
const ngr = new NGR();
console.log(arr);
const nextLargestElements = ngr.getNextGreatestElements(arr, arr.length);
console.log(nextLargestElements);