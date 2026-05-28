class Solution {
    groupAnagrams(strs) {
    
    const map = new Map(); //Hashmap

    for (const eachWord of strs) {
    const sortedKey = eachWord.split('').sort().join(); //Alphabetically sorting word to insert new key
    
    if (!map.has(sortedKey)) map.set(sortedKey, []);
    map.get(sortedKey).push(eachWord); //Pushing word under respective sortedKey
    };
    
    return Array.from(map.values()); //returning values from map & neglecting keys
    };
};
