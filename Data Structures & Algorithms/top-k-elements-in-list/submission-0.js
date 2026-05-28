class Solution {
    topKFrequent(nums, k) {
     
    const count = {}; //Hashmap
    
    for (const eachNumber of nums) {
        count[eachNumber] = (count[eachNumber] || 0) + 1;
    };
    
    const buckets = Array(nums.length + 1).fill().map(() => []); //Creating empty buckets for sorting
    
    for (const eachNumber in count) {
        buckets[count[eachNumber]].push(Number(eachNumber)) //Pushing the frequency of number into bucket
    };
    
    const result = []; //Contructing array because we have to return output in array 

    for (let i = (buckets.length - 1); i >= 0; i--) { //Reverse traverse
    for (const eachNumber of buckets[i]) { //looping through nested bucket
        result.push(eachNumber);
        
        if (result.length === k) return result; //k matches result length means over
    };
    };
    
    };
};
