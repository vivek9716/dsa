
class KLargestNumber {

    
    getKLargestNumber (nums: number[]) : number[] {
        
        let numFreqs = {}; 
        
        nums.forEach(num => {
            if (!numFreqs[num]) {
                numFreqs[num] = 1
            } else {
                numFreqs[num] += 1;
            }
        });
        
        let freqNums = {};

        for(let key in numFreqs) {
            if (!freqNums[numFreqs[key]]) {
                freqNums[numFreqs[key]] = []
            }

            if (freqNums[numFreqs[key]].length == 1) {
                if (freqNums[numFreqs[key]][0] < key) {
                    freqNums[numFreqs[key]].pop();
                } 
                freqNums[numFreqs[key]].push(key);
            } else {
                freqNums[numFreqs[key]].push(key);
            }
        }

        const sortedFreq = Object.keys(freqNums).sort((a, b) => parseInt(b) - parseInt(a));
        
        const res = [];

        sortedFreq.forEach((key, i) => {
            if (i < 2) {
                res.push(parseInt(freqNums[key][0]));
            }
        });
        
        return res;
    }
    


}

const KSN = new KLargestNumber();

const arr = [1, 1, 1, 2, 2, 3, 3, 3];

const larestElementWithMaxFreq = KSN.getKLargestNumber(arr);

console.log(larestElementWithMaxFreq);