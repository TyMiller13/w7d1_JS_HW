console.log("Week 7 Day 1 JS Homework")

//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/


let exerciseOneArr = [1, 2, 3, 5, 6, 7]

function nonConsecutive(arr){
    let result;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] - arr[i-1] !== 1){
            result = (i);
        }
    }
    return result;
}
console.log(nonConsecutive(exerciseOneArr))
//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.


Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 


let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 


function sumOfNums(arr){
    let sum = 0;
    for (let num of arr){
        if(num > 0){
            sum += num
        }
    }
    return sum
}
console.log(sumOfNums(numbers1));


// ~~~~~~~~~~~~CODEWARS QUESTIONS~~~~~~~~~~~~~~~~~~
// NUMBER 1

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string){
    let cache = {};
    for(let char of string){
      if(char in cache){
        cache[char] += 1;
      } else {
        cache[char] = 1;
      }
    }
    return cache
  }

console.log(count("aba")); // => { a: 2, b: 1 }

// NUMBER 2

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf("needle")}`;
  }

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
//~~~~TEST~~~~~
// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 