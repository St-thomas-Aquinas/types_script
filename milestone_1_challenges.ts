

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(100,100))

//challenge 2 : converting 10 min into seconds.

function convert(min: number): number {
    console.log("Iam the function that is converting minnutes into seconds")
    return min*60;
}
console.log(convert(10))

//Challenge 3 : Calculating the perimenter of a rectangle
function perimenter(length:number,width:number):Number {
    console.log("Iam the fuction for calculating perimeter of a rectangle")
    return ((length + width)*2)
}
console.log(perimenter(10,10))


//challenge 4: checking if number is negative
function isNegative(num:number) {
    console.log("Iam the function of checking if a number is negative")
    if (num < 0){
        console.log("The number is negative")
    }
    else
    console.log("The number is postive")
}
isNegative(-10)

//end


//challenge 5: checking if a person can drive.
function Drive(firstName:string,Lastname:string,age:number){
    console.log("Iam the function that is checking if you are old enough to drive");
    
    if (age >=18){
        console.log(`Congratulation ${firstName} ${Lastname}`);
    }
     else{
        console.log(`sorry  ${firstName} ${Lastname} you are not old enough`);
     }
}
Drive("Maxwell","kuria",18)



//challenge 6: finding the largest number
function findlargest(num1:number,num2:number,num3:number){
    console.log("Iam the function that is comparing which of 3 number is bigger")
   
    let max = Math.max(num1, num2, num3);
    console.log(`Between   ${num1} ${num2} ${num3} this is the largest ${max} `);
}
findlargest(100,110,10)


//challenge 7: calculate body mass index
function calculateBM1(height:number,weight:number){
    console.log("iam the function for calculating BMI")

    let BMI:number = weight/(height*height)
    
    if(BMI < 18.5){
        console.log(`your BMI IS   ${BMI} you are underweight} `);
    }
    else if(BMI =18.5 || BMI <=24.9){
        console.log(`your BMI IS   ${BMI} you are Normal weight} `);
    }
    else if(BMI = 25 || BMI <=29.9){
        console.log(`your BMI IS  ${BMI} you are Overweight} `);
    }
    else if(BMI >= 30){
        console.log(`your BMI IS   ${BMI} you are obese} `);
    }
    }
    calculateBM1(100,100)

//end

//challenge 8 ; greeting based on time

function greetuser(){
    console.log("Iam te function excuting challenge 8: greating users")
    let time:Date = new Date();
   let hours:number = time.getHours();
   console.log("Iam a greeting function")

   if(hours >= 5 || hours <= 11){
    console.log(`Good morning alice`);
}
else if(hours >= 12 || hours <=17){
    console.log(`Good afternoon ,alice `);
}
else if(hours >= 18 || hours <=21){
    console.log(`good evening alice`);
}
else if(hours >= 22 || hours <= 24){
    console.log(`good night,alice`);
}

}
greetuser()



//challenge 9: fizzbuz
function fizzbuzCheck(num:number){
    console.log("Iam the function excuting challenge 9: fizzbuzcheck")
    let isDivisible3:number = num%3;
    let isDivisible5:number =num%5;
    
   if(isDivisible3 == 0){
    console.log(`FIZZ Number is divisble by 3`);
}
 if(isDivisible5 == 0){
    console.log(`BUZZ number is divisible by 5 `);
}
 if(isDivisible5 == 0 && isDivisible3 == 0){
    console.log(`fizz buzz`);
}

}
fizzbuzCheck(15)


//challenge 10: perimeter
function perimenter2(shape:string,num:number){

    if (shape = "s"){
        console.log("You have chose a square the perimeter is")
        console.log(num*num)

    }
    else{
        console.log("you have chosen a circle the perimeter is")
        console.log(3.142*10)
    }

 }
 perimenter2("s",10)
 
 
 //challenge 11: sum of even number
 function sumEvenNumber(num:number):number{
    console.log("Iam the function excuting challenge 11")
    let sum:number = 0;

    for (let i = 2; i <= num; i +=2) {
     sum += i;
     
    }
return sum
}
console.log(sumEvenNumber(10))
separator()

