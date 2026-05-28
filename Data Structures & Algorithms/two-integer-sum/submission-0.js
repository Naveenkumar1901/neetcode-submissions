class Solution {
    twoSum(nums, target) {
    
    const map = new Map(); //Hashmap

    for (let i = 0; i < nums.length; i++) {
    const compliment = (target - nums[i]);

    if (map.has(compliment)) { //Contains check
    return [map.get(compliment), i];
    }

    map.set(nums[i], i); //Storing
    };

    };
};
