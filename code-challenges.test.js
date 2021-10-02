// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//JEST TEST: for a soon to be function called shiftAndShuffle that should remove the first element of a given array and then shuffle the remaining elements
describe("shiftAndShuffle", () => {
    it("testing a function that should remove the first element and shuffle remaining elements in the array", () => {
        var colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

        expect(shiftAndShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shiftAndShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })
//test fails:   ReferenceError: shiftAndShuffle is not defined


// b) Create the function that makes the test pass.

//function that takes in array as a param
const shiftAndShuffle = (array) =>{
    //mutate arg array by using shift method to remove 1 element
    array.shift();
    //empty array to push randomized elements into
    let shuffledArray = [];
    //empty array to keep track of randomized indexes
    let randIndexes = [];

    //for loop to construct randIndexes array with the same length of shifted array
    for(let i = 0; i < array.length; i++){
        //randomized number based on length of shifted array
        let index = Math.floor(Math.random()*array.length);
        //while loop to make sure it isn't already in the array of randomized indexes
        while(randIndexes.includes(index)){
            index = Math.floor(Math.random()*array.length);
        }

        //if unique, push random num into array of randomized indexes
        randIndexes.push(index);
        //also push the random element in array into shuffledArray
        shuffledArray.push(array[index]);
    }
    return shuffledArray
}

//failed at first due to some typos. Got the randomization down but just needed to tweak the push mechanism since it was not pushing correctly. Finally got the test to pass


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

//JEST TEST to test a function called minMax that will find a min and max of a given array and make sure they are in ascending order
describe("minMax", () => {
    it("testing a function that takes an array, finds min and max number, and makes sure they are in ascending order", () => {
        var nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        var nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]

        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
  })
//test fails because    ReferenceError: minMax is not defined


// b) Create the function that makes the test pass.

//function minMax that takes in an array
const minMax = (array) =>{
    //sorts array in ascending order. basically if a-b returns less than 0 sort b in front of a
    array.sort((a,b) => a-b)
    //returns the first element and the last element of that array which would be the min and max since it has been sorted
    return [array[0], array[array.length-1]]
}
//test passes! 



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

//JEST TEST: testing function noDupes that should take two arrays and combine them making sure there are no duplicate values
describe("noDupes", () => {
    it("testing a function that takes two arrays, combines them but ensures no duplicate values", () => {
        var testArray1 = [3, 7, 10, 5, 4, 3, 3]
        var testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

        expect(noDupes(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
  })
//test fails: ReferenceError: noDupes is not defined


// b) Create the function that makes the test pass.

//function called noDupes that takes two arrays
// const noDupes = (a1, a2) => {
//     //concat array1 and 2 for comparison
//     let combinedArrays = a1.concat(a2);
//     //array to return with no dupes
//     let noDupesArray = [];

//     //iterates through the combinedArrays
//     for(let i = 0; i<combinedArrays.length; i++){
//         //if the value does not exist in the noDupesArray yet then we should push to the new array otherwise do nothing
//         //interesting syntax
//         //condition-----------------------------     execute this if true----------------
//         !noDupesArray.includes(combinedArrays[i]) && noDupesArray.push(combinedArrays[i]);
//     } 

//     return noDupesArray
// }
//test passes! 

//Almost forgot!! STRETCH: Use the spread operator to pass in a dynamic number of arguments.

//function called noDupes that takes any number of arrays
const noDupes = (...arr) => {
    //create empty array to concat with spread operator
    let combinedArrays = [].concat(...arr);
    //array to return with no dupes
    let noDupesArray = [];

    //iterates through the combinedArrays
    for(let i = 0; i<combinedArrays.length; i++){
        //if the value does not exist in the noDupesArray yet then we should push to the new array otherwise do nothing
        //interesting syntax
        //condition-----------------------------     execute this if true----------------
        !noDupesArray.includes(combinedArrays[i]) && noDupesArray.push(combinedArrays[i]);
    } 

    return noDupesArray
}

//took a couple tries. I actually had issues flattening doing something like the following:
//let combinedArrays = [];
//combinedArrays.push(...arr)
//combinedArrays.flat()
//realized .flat() returns a new array and needs to be assigned to a variable