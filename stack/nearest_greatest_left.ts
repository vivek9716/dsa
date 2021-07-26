import Stack from '@vivek-dsa/stack';

const stack = new Stack();

class NGL {
    
    private vector: number[] = []

    getNextGreatestLeft(arr: number[], n: number) {
        for (let i = 0; i <= n - 1; i++) {
            if (stack.isEmpty()) {
                this.vector.push(-1);
                stack.push(arr[i]);
            } else {
                if (stack.peek() > arr[i]) {
                    this.vector.push(stack.peek());
                    stack.push(arr[i]);
                } else {
                    while(!stack.isEmpty() && stack.peek() < arr[i]) {
                        stack.pop();
                    }
    
                    if(stack.isEmpty()) {
                        this.vector.push(-1);
                        stack.push(arr[i]);
                    } else if (arr[i] <= stack.peek()) {
                        this.vector.push(stack.peek());
                        stack.push(arr[i]);
                    }
                }
            }
        }
        return this.vector;
    }

}

const arr = [5, 6, 1, 3, 2, 4];
const ngr = new NGL();
console.log(arr);
const nextLargestElements = ngr.getNextGreatestLeft(arr, arr.length);
console.log(nextLargestElements);