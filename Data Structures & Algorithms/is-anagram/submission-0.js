class Solution {
isAnagram(s, t) {

if (s.length !== t.length) return false;

const count = {}; //Hashmap

for (let eachCharacter of s) {
count[eachCharacter] = (count[eachCharacter] || 0) + 1;
};

for (let eachCharacter of t) { //traverse t
if (!count[eachCharacter]) return false;
count[eachCharacter]--; //All counts become 0 -> true
};

return true; 
};
};
