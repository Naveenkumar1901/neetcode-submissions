class Solution {
    maxArea(heights) {
    let left = 0; //left = start
    let right = (heights.length - 1); //right = end
    let maxArea = 0;

    while (left < right) {
    let minimumHeight = Math.min(heights[left], heights[right]); //area is limited by the shorter line
    let width = (right - left); //x-axis span
    let area = (minimumHeight * width); //calculate area
    maxArea = Math.max(maxArea, area); //update maximum area

    if (heights[left] < heights[right]) { //move shorter height pointer
     left++; //moving shorter line in-ward, hoping to find a taller line                            
    }
    else {
     right--; //repeat until pointers meet
    }
    }

    return maxArea; //return maximum area
    };
};
