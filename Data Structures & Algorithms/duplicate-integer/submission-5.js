class Solution {
hasDuplicate(nums) {

const set = new Set(); //Hashset

for (let eachNumber of nums) {
    if (set.has(eachNumber)) { //contains check
         return true;
    }

    set.add(eachNumber); //storing
};

return false; //if no duplicates
};
};
