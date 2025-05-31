//This function is used to create a line that will separate the results , helps to enhance apearance and readability.
function separator() {
    console.log("______________________________________________________________________");
}
separator();
//end
//challenge 1: sum of positives
function sumOfpositives(array) {
    console.log("Iam the function sum of positive numbers:Challenge 1");
    var len = array.length;
    var sum = 0;
    for (var i = 0; i <= len; i++) {
        if (array[i] > 0) {
            sum = array[i] + sum;
        }
    }
    return sum;
}
console.log(sumOfpositives([1, -2, -3, 4, 5]));
separator();
//end
//challenge 2: find maximum value
function findMax(array) {
    console.log("Iam the function find maximum value:Challenge 2");
    var len = array.length;
    var sum = 0;
    for (var i = 0; i <= len; i++) {
        if (array[i] > sum) {
            sum = array[i];
        }
    }
    return sum;
}
console.log(findMax([3, 7, 2, 9, 5]));
separator();
function findwinner(candidates) {
    console.log("Iam the function excuting challenge 3,Election Winner");
    var len = candidates.length;
    var winner = 0;
    var index = -1;
    for (var i = 0; i < len; i++) {
        var ret = candidates[i].votes;
        if (ret > winner) {
            winner = ret;
            index = i;
        }
    }
    console.log(candidates[index]);
}
findwinner([{ name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },]);
separator();
function findlongest(fruits) {
    console.log("Iam the function excuting challenge 4,longest word");
    var len = fruits.length;
    var longestword = " ";
    var index = -1;
    for (var i = 0; i < len; i++) {
        var ret = fruits[i];
        if (ret.length > longestword.length) {
            longestword = ret;
            index = i;
        }
    }
    console.log(fruits[index]);
}
findlongest(["apple", "banana", "pear", "grapefruit"]);
separator();
function countProperties(obj) {
    console.log("Iam the function excuting challenge 5,counting properties/keys");
    var numberofkeys = Object.keys(obj);
    var count = numberofkeys.length;
    console.log("Number of keys/properties is ", count);
}
countProperties({ name: "Alice", age: 25, city: "Paris" });
separator();
//end
//challenge 6: filterByLength
function filterByLength(animals) {
    console.log("Iam the function excuting challenge 6,filter by lenght");
    var len = animals.length;
    var minlen = 5;
    var array = [];
    for (var i = 0; i < len; i++) {
        var ret = animals[i];
        if (ret.length >= minlen) {
            array.push(ret);
        }
    }
    return array;
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"]));
separator();
//end
