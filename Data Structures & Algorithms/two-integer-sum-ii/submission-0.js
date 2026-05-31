class Solution {
    twoSum(numbers, target) {
    let left = 0; //left = start
    let right = (numbers.length - 1); //right = end

    while (left < right) {
    let sum = (numbers[left] + numbers[right]); //calculate sum

    if (sum === target) {
      return [left + 1, right + 1]; //return indices(+1 because 1-indexed array)
    }

    if (sum < target) { 
       left++; //sum is too small, increase it by moving left pointer to right
    }
    else {
       right--; //sum is too large, decrease it by moving right pointer to left
    }
    //continue until found
    }

    };
};
