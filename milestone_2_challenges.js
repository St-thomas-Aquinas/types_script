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
//challenge 7: sum of even numbers
function sumEvennumbers(array) {
    console.log("Iam the function excuting challenge 7,sum of even numbers");
    var len = array.length;
    var sum = 0;
    for (var i = 0; i < len; i++) {
        var ret = array[i];
        var num = ret % 2;
        if (num == 0) {
            sum = ret + sum;
        }
    }
    return sum;
}
console.log(sumEvennumbers([1, 2, 3, 4, 5, 6]));
separator();
//end
//change 8 :differenceEvenOdd
function differenceEvenOdd(array) {
    console.log("Iam the function excuting challenge 8,diffrence between even and odd numbers");
    var len = array.length;
    var sumofeven = 0;
    var sumofodd = 0;
    for (var i = 0; i < len; i++) {
        var ret = array[i];
        var num = ret % 2;
        if (num == 0) {
            sumofeven = ret + sumofeven;
        }
        else {
            sumofodd += ret;
        }
    }
    return (sumofeven - sumofodd);
}
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));
separator();
function countTruthy(Truthy) {
    console.log("Iam the function excuting challenge 9");
    var person = Object.create(Truthy);
    var array = [];
    array[array.length] = Object.keys(Truthy);
    array.unshift(Object.keys(Truthy));
    var len = array.length;
    var count = 0;
    for (var i = 0; i < len; i++) {
        var index = array[1][i];
        var bool = Boolean(Truthy.hasOwnProperty(index));
        if (bool === true) {
            count++;
        }
    }
    console.log("They are ", count, "truth values");
}
countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null });
separator();
//end
//change 10 : avarange of numbers
function average() {
    console.log("Iam the function excuting challenge 10");
    var array = [2, 4, 6, 8];
    var len = array.length;
    var sum = 0;
    for (var i = 0; i < len; i++) {
        var ret = array[i];
        sum = ret + sum;
    }
    return sum / len;
}
console.log(average());
separator();
//end
//challenge 11: linear search
function linearSearch() {
    console.log("Iam the function excuting challenge 11");
    var array = [1, 4, 6, 8, 0];
    var len = array.length;
    var item = 2;
    var index = 0;
    for (var i = 0; i < len; i++) {
        var ret = array[i];
        if (item == ret) {
            i;
            index++;
            console.log("your item found at index", i);
        }
    }
    if (index == 0) {
        console.log("Not found -1");
    }
}
linearSearch();
separator();
//end
//challenges 12: reverse linear search
function reverlinearSearch() {
    console.log("Iam the function excuting challenge 12,rever linear search");
    var array = [2, 1, 4, 6, 8, 0, 2];
    var len = array.length;
    var item = 2;
    var index = 0;
    var lastindex = 0;
    for (var i = 0; i < len; i++) {
        var ret = array[i];
        if (item == ret) {
            index++;
            lastindex = i;
            if (i == len) {
                console.log("your item found at last index", lastindex);
            }
        }
    }
    if (index == 0) {
        console.log("Not found at any index");
    }
}
reverlinearSearch();
separator();
//end
//challenge 13: linear search all items
function linearSearchAll() {
    console.log("Iam the function excuting challenge 13,linear search all");
    var array = [2, 1, 4, 6, 8, 0, 2];
    var len = array.length;
    var item = 2;
    var index = 0;
    var lastindex = 0;
    for (var i = 0; i < len; i++) {
        var ret = array[i];
        if (item == ret) {
            index++;
            lastindex = i;
            console.log("your item found at index", lastindex);
        }
    }
    if (index == 0) {
        console.log("Not found ");
    }
}
linearSearchAll();
separator();
//end 
//challenge 14:count occurrences
function countOccurrences() {
    console.log("Iam the function excuting challenge 14,countOccurence");
    var fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
    var rep = [];
    var count = 0;
    var len = fruits.length;
    function jo(i) {
        for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
            var fruit = fruits_1[_i];
            rep[rep.length] = fruits[i];
            if (fruit === fruits[i]) {
                count++;
            }
        }
        console.log("Number of occurrences of element ".concat(fruits[i], ": ").concat(count));
        count = 0;
    }
    var i = 0;
    while (i < len) {
        jo(i++);
    }
}
countOccurrences();
separator();
//challenge 15:remove duplicates
function removeDuplicates() {
    console.log("Iam the function excuting challenge 15, removing duplicates");
    var array = [1, 2, 3, 2, 4, 1, 5];
    var len = array.length;
    var newarray = [];
    var index = 0;
    var lastindex = 0;
    for (var i = 0; i < len; i++) {
        var ret = array[i];
        if (newarray.indexOf(array[i]) == -1) {
            newarray.push(array[i]);
        }
    }
    console.log("I have removed all the duplicate this is the new array", newarray);
}
removeDuplicates();
separator();
//end
//challenge 16; most frequent 
function mostFrequent() {
    console.log("Iam the function excuting challenge 16,Most frequent");
    var fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
    var rep = [];
    var count = 0;
    var len = fruits.length;
    var largest = 0;
    var index = 0;
    function jo(i) {
        for (var _i = 0, fruits_2 = fruits; _i < fruits_2.length; _i++) {
            var fruit = fruits_2[_i];
            rep[rep.length] = fruits[i];
            if (fruit === fruits[i]) {
                count++;
            }
        }
        if (largest < count) {
            largest = count;
            index = i;
            console.log("The most frequent is", fruits[index], "With", largest, "elements");
        }
        count = 0;
    }
    var i = 0;
    while (i < len) {
        jo(i++);
    }
}
mostFrequent();
separator();
//end
