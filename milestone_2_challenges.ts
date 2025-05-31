//This function is used to create a line that will separate the results , helps to enhance apearance and readability.
function separator() {
    console.log(
      "______________________________________________________________________"
    );
  }
  separator();
  //end
  

//challenge 1: sum of positives
function sumOfpositives(array:Array<number>):number {
    console.log("Iam the function sum of positive numbers:Challenge 1");
    let len:number = array.length;
    let sum:number = 0;
    for (let i = 0; i <= len; i++) {
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
function findMax(array:Array<number>):number {
    console.log("Iam the function find maximum value:Challenge 2");
    let len:number = array.length;
    let sum:number = 0;
  
    for (let i = 0; i <= len; i++) {
      if (array[i] > sum) {
        sum = array[i];
      }
    }
    return sum;
  }
  console.log(findMax([3, 7, 2, 9, 5]));
  separator();
  //end


//Challenge 3:Election Winner

type candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
];
function findwinner(candidates:candidates) {
    console.log("Iam the function excuting challenge 3,Election Winner");
  
    
    let len:number = candidates.length;
    let winner:number = 0;
    let index :number= -1;
  
    for (let i = 0; i < len; i++) {
      let ret = candidates[i].votes;
  
      if (ret > winner) {
        winner = ret;
        index = i;
      }
    }
    console.log(candidates[index])
  }
  
  findwinner([ { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 },])
  separator();
  //end

  //challenge 4: longest word.
  type fruits = ["apple", "banana", "pear", "grapefruit"];
function findlongest(fruits:fruits) {
    console.log("Iam the function excuting challenge 4,longest word");
    
    let len:number = fruits.length;
    let longestword:string = " ";
    let index:number = -1;
  
    for (let i = 0; i < len; i++) {
      let ret = fruits[i];
  
      if (ret.length > longestword.length) {
        longestword = ret;
        index = i;
      }
    }
    console.log(fruits[index])
  }
  
findlongest( ["apple", "banana", "pear", "grapefruit"])
  separator();
  //end

  //Challenge 5: counting properties
  type obj = { name: "Alice", age: 25, city: "Paris" };
function countProperties(obj:obj) {
    console.log("Iam the function excuting challenge 5,counting properties/keys");
    
    const numberofkeys = Object.keys(obj);
    const count = numberofkeys.length;
  
    console.log("Number of keys/properties is ", count);
  }
  countProperties({ name: "Alice", age: 25, city: "Paris" });
  separator();
  //end


//challenge 6: filterByLength
function filterByLength(animals:Array<string>) {
    console.log("Iam the function excuting challenge 6,filter by lenght");
    let len:number = animals.length;
    let minlen:number = 5;
    let array:Array<string> = [];
    for (let i = 0; i < len; i++) {
      let ret = animals[i];
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
function sumEvennumbers(array:Array<number>) {
    console.log("Iam the function excuting challenge 7,sum of even numbers");
    let len:number = array.length;
    let sum:number = 0;
  
    for (let i = 0; i < len; i++) {
      let ret:number = array[i];
      let num:number = ret % 2;
  
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
function differenceEvenOdd(array:Array<number>) {
    console.log("Iam the function excuting challenge 8,diffrence between even and odd numbers");
    let len:number = array.length;
    let sumofeven:number = 0;
    let sumofodd:number = 0;
  
    for (let i = 0; i < len; i++) {
      let ret:number = array[i];
      let num:number = ret % 2;
  
      if (num == 0) {
        sumofeven = ret + sumofeven;
      } else {
        sumofodd += ret;
      }
    }
    return (sumofeven - sumofodd);
  }
  
  console.log(differenceEvenOdd( [1, 2, 3, 4, 5, 6]));
  separator();
  //end

  //Challenge 9:count truth vales
  type Truthy = { a: 0, b: "hello", c: false, d: 42, e: null};

  function countTruthy(Truthy:Truthy){
      console.log("Iam the function excuting challenge 9");
      let person = Object.create(Truthy);
      let array:string[][] =[]
      array[array.length] = Object.keys(Truthy);
      array.unshift(Object.keys(Truthy))

      let len:number = array.length;
      let count:number = 0;
      for (let i = 0; i < len; i++) {
         let index:string = array[1][i]
        let bool = Boolean(Truthy.hasOwnProperty(index));
        if (bool === true) {
          count++;
        }
      }
      console.log("They are ",count,"truth values") 
    }
countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null})
    separator();
    //end

//change 10 : avarange of numbers
function average() :number{
    console.log("Iam the function excuting challenge 10");
    const array:Array<number> = [2, 4, 6, 8];
  
    let len:number = array.length;
    let sum:number = 0;
  
    for (let i = 0; i < len; i++) {
      let ret = array[i];
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
    const array:Array<number> = [1, 4, 6, 8, 0];
  
    let len:number = array.length;
    let item:number = 2;
    let index:number = 0;
  
    for (let i = 0; i < len; i++) {
      let ret = array[i];
      if (item == ret) {
        i;
        index++;
        console.log("your item found at index", i)
      }
    }
     if(index == 0) {
        console.log("Not found -1")
    }
  }
  linearSearch();
  separator();
  //end
  


//challenges 12: reverse linear search
function reverlinearSearch(){
    console.log("Iam the function excuting challenge 12,rever linear search");
    const array:Array<number> = [2, 1, 4, 6, 8, 0, 2];
  
    let len:number = array.length;
    let item:number = 2;
    let index:number = 0;
    let lastindex:number = 0;
  
    for (let i = 0; i < len; i++) {
      let ret = array[i];
      if (item == ret) {
        index++;
        lastindex = i;
        if (i == len) {
          console.log("your item found at last index", lastindex);
        }
      }
    }
    if (index == 0) {
      console.log("Not found at any index")
    }
  }
  reverlinearSearch();
  separator();
  //end
  
  
  //challenge 13: linear search all items
  function linearSearchAll() {
    console.log("Iam the function excuting challenge 13,linear search all");
    const array:Array<number> = [2, 1, 4, 6, 8, 0, 2];
  
    let len:number = array.length;
    let item:number = 2;
    let index:number = 0;
    let lastindex:number = 0;
  
    for (let i = 0; i < len; i++) {
      let ret = array[i];
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
  function countOccurrences(){
    console.log("Iam the function excuting challenge 14,countOccurence");
    const fruits: string[] = ["apple", "banana", "apple", "orange", "banana", "apple"];
    const rep:string[] =[]
    let count: number = 0;
    let len:number = fruits.length
    
    function jo(i:number){
    for (const fruit of fruits) {
            rep[rep.length] = fruits[i]
        if (fruit === fruits[i]) {
            count++;
        }
    }
    
    
    console.log(`Number of occurrences of element ${fruits[i]}: ${count}`);
    count = 0
    }
    let i :number =0
    while( i< len){
    jo(i++)
    }
    }
    countOccurrences()
    separator();
  
  
  //challenge 15:remove duplicates
  function removeDuplicates() {
    console.log("Iam the function excuting challenge 15, removing duplicates");
    const array:Array<number> = [1, 2, 3, 2, 4, 1, 5];
  
    let len = array.length;
    let newarray:Array<number> = [];
    let index:number = 0;
    let lastindex:number = 0;
  
    for (let i = 0; i < len; i++) {
      let ret = array[i];
  
      if (newarray.indexOf(array[i]) == -1) {
        newarray.push(array[i]);
      }
    }
    console.log(
      "I have removed all the duplicate this is the new array",
      newarray
    );
  }
  removeDuplicates();
  separator();
  //end
  
  //challenge 16; most frequent 
  function mostFrequent() 
  {
    console.log("Iam the function excuting challenge 16,Most frequent");
        const fruits: string[] = ["apple", "banana", "apple", "orange", "banana", "apple"];
        const rep:string[] =[]
        let count: number = 0;
        let len:number = fruits.length
        let largest:number =0
        let index:number = 0
        
        function jo(i:number){
        for (const fruit of fruits) {
                rep[rep.length] = fruits[i]
            if (fruit === fruits[i]) {
                count++;
            }
        }
        
        if(largest < count){
            largest =count
            index=i
            console.log("The most frequent is",fruits[index],"With",largest,"elements")
        }
        count = 0
        }
    
        let i :number =0
        while( i< len){
        jo(i++)
        }
        }

  mostFrequent();
  separator();
  //end
  
  