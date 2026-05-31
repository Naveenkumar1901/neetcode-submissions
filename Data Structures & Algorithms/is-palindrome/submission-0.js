class Solution {
    isPalindrome(s) {
    let left = 0; //left = start
    let right = (s.length - 1); //right = end

    while(left < right) {
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) { //skipping non-alphanumeric characters
    left++;
    }

    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) { //skipping non-alphanumeric characters
    right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
     return false; //false -> if case mismatch
    }

    left++; //move both pointers if matched
    right--;
    }

    return true; //true -> pointers cross
    };
};
