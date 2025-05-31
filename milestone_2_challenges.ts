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