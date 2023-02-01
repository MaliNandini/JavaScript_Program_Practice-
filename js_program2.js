/****************   Program to Calculate the Area of a Triangle *********************/
// const base = parseInt(prompt('enter base'));
// const height = parseInt(prompt('enter height'));
// const width = parseInt(prompt('enter width'));

// const s = (base * height*width)/2;

// const area = Math.sqrt( s * (s - base) * (s - height) * (s - width));
// console.log(area);

/**************** Program to Swap Two Variables *********************/
// var num1 = 20;
// var num2 = 30;

// [num1,num2] = [num2 , num1]; // destructuring

//using 3rd variable
// var temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(`num1: ${num1},num2 : ${num2}`);

/****************   Program to Convert Kilometers to Miles *********************/
// const km =  2.2;
// const miles = km * 0.621371;
// console.log(miles);

/****************   Program to Convert Celsius to Fahrenheit *********************/
// const celsium = 55;
// const fahrenheit = (celsium * 1.8) + 32
// console.log(fahrenheit + " " +"degree");

/****************  Get a Random Number between 1 and 10  *********************/
// formula : Math.random() * (highestNumber - lowestNumber) + lowestNumber
// const a = Math.random()*(10-1)+1;
// console.log(a);

/****************  Program to Check if a number is Positive, Negative, or Zero  *********************/
// const num = 20;
// if(num>0){
//     console.log("positive number");
// }
// else if(num < 0){
//     console.log("negative number");
// }
// else{
//     console.log("zero number");
// }

/****************  Program to Check if a Number is Odd or Even  *********************/
// const num = 7;
// if(num%2 == 0){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }

/****************  Program to Find the Largest Among Three Numbers  *********************/
// const num1 = 12;
// const num2 = 5;
// const num3 = 4;
// let largest ;

// if(num1>num2 && num1>num3){
//     console.log(largest = num1);

// }else if(num2>num1 && num2>num3){
//   console.log(largest = num2)
// }else{
//     console.log(largest = num3)
// }

/**************** Program to Check Prime Number  *********************/
// const number = 7;
// let isPrime = true;
// if (number === 1) {
//   console.log("1 is neither prime nor composite number.");
// } else if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is a not prime number`);
//   }
// } else {
//   console.log("The number is not a prime number.");
// }

/****************  Program to Print All Prime Numbers in an Interval  *********************/
// const lowerNum = 2;
// const higherNum = 20;
// for(let i=lowerNum; i<= higherNum; i++){
//     let flag = true;
//     for(let j=2; j<i; j++){
//         if (i % j == 0) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag) {
//         console.log(i);
//     }
// }

/**************** Program to Find the Factorial of a Number  *********************/
// const num = 3;
// var fact = 1;
// for(let i=1;i<=num;i++){
//     fact = fact*i;
// }
// console.log(fact);

/****************  Program to Display the Multiplication Table  *********************/
// const num = 3;
// for(let i=1; i<=10;i++){
//     var result = num*i;
//     console.log(num+ " "+"*" +" "+i +" "+ "="+ " " + result);
// }

/**************** Program to Print the Fibonacci Sequence  *********************/
// var num1 = 0;
// var num2 = 1;
// var result=0;

// console.log(num1);
// console.log(num2);
// for(let i=2;i<=10;i++){
//     result = num1+ num2;
//     num1 = num2;
//     num2 = result;
//     console.log(result);
// }

/****************  Program to Find the Sum of Natural Numbers *********************/
// var num = 100;
// var sum = 0;
// for(let i=1; i<=num; i++){
//     sum = sum+i;
// }
// console.log(sum);

/**************** Program to Check if the Numbers Have Same Last Digit  *********************/
// var num1=8;
// var num2 = 88;
// var num3 = 38;

// const result1 = num1%10;
// const result2 = num2%10;
// const result3 = num3%10;

// if(result1 == result2 && result1 == result3){
//     console.log("same");
// }else{
//     console.log("not");
// }

/**************** Program to Find the Factors of a Number  *********************/
// const num= 12;
// for(let i=1; i<=num;i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }


/**************** Program to Find Sum of Natural Numbers Using Recursion  *********************/
// const number = 10;

// function sum(num){
//    if(num > 0){
//     return num + sum(num-1);
//    }else{
//     return num;
//    }
// }

// const result = sum(number);
// console.log(result);


/**************** Program to Display Fibonacci Sequence Using Recursion *********************/
// const number = 5;

// if(number<=0){
//     console.log("enter positive value");
// }else{
//     for(let i=0;i<=number;i++){
//         console.log(fibbo(i));
//     }
// }

// function fibbo(num){
//    if(num <2){
//     return num;
//    }else{
//      return fibbo(num-1)+ fibbo(num-2);
//    }
// }


/**************** Program to Find Factorial of Number Using Recursion *********************/
// const number = 5;
// if(number <=0){
//     console.log("enter positive number")
// }else{
//     const result = fact(number);
//     console.log(result);
// }

// function fact(num){
//     if(num === 0){
//         return 1;
//     }else{
//         return num*fact(num-1);
//     }
// }



/**************** Program to Check Whether a String is Palindrome or Not *********************/
// const string = "dading";
// function isPalindrom(str){
//  const splitString = str.split('');
//  const reverseString = splitString.reverse();
//  const resultStr = reverseString.join('');
 
//  if(str == resultStr){
//     console.log("palindrom");
//  }else{
//     console.log("not palindrom");
//  }
// }

// isPalindrom(string);



/**************** Program to Sort Words in Alphabetical Order *********************/
// const string = "i am learning javascript";
// const words = string.split(' ');
// words.sort();
// words.map((item)=>{
//     console.log(item);
// })



/**************** Program to Replace Characters of a String *********************/
// const string = "i have a blue pen and blue car";
// const regex = /blue/g;
// const result = string.replace(regex,'red');
// console.log(result);


/**************** Program to Replace All Occurrences of a String *********************/
// const string = 'Mr red has a red house and a red car';
// const result = string.split('red').join('blue');
// console.log(result);


/**************** Program to Reverse a String*********************/
// using for loop
// const string = "Nandini";
// function reversestr(str){
//     let newStr = " ";
//     for(let i=str.length-1; i>=0; i--){
//         newStr+=str[i];
//     }
//     return newStr;
// }

// const result = reversestr(string);
// console.log(result);


// using build-in method
// const string = "Nandini";
// function reverseString(str){
//  const spl = str.split('');
//  const rvs = spl.reverse();
//  const newstr = rvs.join('');
//  return newstr;
// }

// const result = reverseString(string);
// console.log(result);



/**************** Program to Check the Number of Occurrences of a Character in the String *********************/
// const string = "assffeewwwfg";
// const findWord = "w";

// function findOccrrence(str,letter){
//  const reg = new RegExp(letter,'g');
//  const count = str.match(reg).length;
//  return count;
// }

// const result = findOccrrence(string,findWord);
// console.log(result);


/**************** Program to Convert the First Letter of a String into UpperCase *********************/
// const string = "javascript";
// const result = string.charAt(0).toUpperCase() + string.slice(1);
// console.log(result);


/**************** Program to Count the Number of Vowels in a String *********************/
// const string = "Nandini";
// const Vowels = ['a','e','i','o','u'];
// function countVowels(string){
//     let conunt = 0;
//     for(let letter of string.toLowerCase()){
//         if(Vowels.includes(letter)){
//             conunt++;
//         }
//     }
//     return conunt;
// }
// const result = countVowels(string)
// console.log(result);

// using regex
// const string = "javascript program";
// function countVowels(str){
//  const count = str.match(/[aeiou]/gi).length;
//  return count;
// }

// const result = countVowels(string)
// console.log(result);



/**************** Program to Convert Date to Number *********************/
// const date = new Date();
// console.log(date);
// const newD = date.getTime();
// console.log(newD);


/****************  Program to Remove a Property from an Object *********************/
// const obj = {
//     name:"ram",
//     age:20,
//     city:"indore",
//     country:"India"
// }
// console.log(obj);
// delete obj.country;
// console.log(obj);


/**************** Program to Check Whether a String Starts and Ends With Certain Characters *********************/
// const string = "string";
// function checkString(str){
//  if(str.startsWith('s') && str.endsWith('g')){
//    console.log("string starts with s and end with g");
//  } else if(str.startsWith('s')){
//     console.log("start with s");
//  }else if(str.endsWith('g')){
//     console.log("end with g");
//  }else{
//     console.log("not start with s and not end with g");
//  }  
// }

// const result = checkString(string);
// console.log(result);


/**************** Program to Check if a Key Exists in an Object *********************/
// const obj = {
//     name:"ram",
//     age:20,
//     city:"indore"
// }

// const hasKey = "name" in obj;
// if(hasKey){
//     console.log("yes");
// }else{
//     console.log("No");
// }


/**************** Program to Merge Property of Two Objects *********************/
// const person = {
//     name: 'Jack',
//     age:26
// }
// const student = {
//     gender: 'male'
// }
//  const result = {...person,...student};
// const result = Object.assign(person,student);
// console.log(result);


/****************  Program to Count the Number of Keys/Properties in an Object *********************/
// const person = {
//     name: 'Jack',
//     age:26,
//     gender: 'male',
//     city:"indore"
// }
// const keyLength = Object.keys(person).length;
// console.log(keyLength);


/****************  Program to Add Key/Value Pair to an Object *********************/
// const person = {
//     name: 'Monica',
//     age: 22,
//     gender: 'female'
// }
// person.height = 4.5;
// person['height'] = 5.5;
// console.log(person);


/****************  Program to Create Multiline Strings *********************/
//Using Template Literal
// const message = `This is a long message
// that spans across multiple lines
// in the code.`

// console.log(message);

// Using +
// const message = 'This is a long message\n' + 
//     'that spans across multiple lines\n' + 
//     'in the code.'

// console.log(message);


/**************** Program to Generate Random String *********************/
// using build in method
// const result = Math.random().toString(36).substring(2,7);
// console.log(result);


// using for loop
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(num) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < num; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

// console.log(generateString(5));


/**************** Program to Check if a String Starts With Another String *********************/
// const string = "Hello World";
// const toChacking = "He";

// if(string.startsWith(toChacking)){
//     console.log("true");
// }else{
//     console.log("false");
// }


/**************** Program to Trim a String *********************/
// const string = '      Hello World       ';
// const result = string.trim();
// console.log(result);



/****************  Program to Convert Objects to Strings *********************/
// const person = {
//     name: 'Jack',
//     age: 27
// }
// const result = JSON.stringify(person);
// console.log(result);
// console.log(typeof result);



/**************** Program to Check Whether a String Contains a Substring *********************/
// const string = "Hello , i am learning javascript";
// const checkSubString = "learning";

// if(string.includes(checkSubString)){
//     console.log("true");
// }else{
//     console.log("false");
// }

// using indexof method
// const string = "Hello , i am learning javascript";
// const checkSubString = "javascript";

// if(string.indexOf(checkSubString) !== -1){
//     console.log("true");
// }else{
//     console.log("false");
// }



/**************** Program to Compare Two Strings *********************/
// const string1 = "hello world";
// const string2 = "hello world";

// if(string1 === string2){
//     console.log("true");
// }else{
//     console.log("false");
// }


/**************** Program to Replace all Instances of a Character in a String *********************/
// const string = "learning javascript";
// const result = string.replace(/a/g,'A');
// console.log(result);

// using method
// const sp = string.split('a');
// const jo = sp.join('A');
// console.log(jo);


/**************** Program to Display Date and Time *********************/
// const date = new Date();
// const n = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log(n);
// console.log(time);


/**************** Program to Remove Specific Item From an Array *********************/
// const arr = [1,2,3,4,5,6,7];
// function removeItem(a,n){
//     let newArr =[];
//   for(let i=0;i<=arr.length;i++){
//     if(arr[i] !==n){
//        newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// const remove = removeItem(arr,5);
// console.log(remove);




/**************** Program to Check if An Array Contains a Specified Value *********************/
// const array = ['you', 'will', 'learn', 'javascript'];
// const haskey = array.includes('will');
// if(haskey){
//     console.log("true");
// }else{
//     console.log("false");
// }


// const array = ['you', 'will', 'learn', 'javascript'];
// const hasValue = array.indexOf('will') !== -2;
// if(hasValue) {
//     console.log('Array contains a value.');
// } else {
//     console.log('Array does not contain a value.');
// }




/****************  Program to Insert Item in an Array *********************/
// const arr = [1,2,3,4,5];
// arr.splice(5,0,6);
// console.log(arr); 



/****************  Program to Append an Object to An Array *********************/
// const arr = [1,2,3,4,5];
// const obj = {
//     name :"ram",
//     age : 40
// }
// let index = arr.length;
// arr.splice(index,0,obj);
// // arr.push(obj);
// console.log(arr);



/****************  Program to Check if An Object is An Array *********************/
// const arr = [1,2,3,4,5];
// const isArray = Array.isArray(arr);
// if(isArray){
//     console.log(true);
//     console.log(typeof arr);
// }else{
//     console.log(false);
// }



/**************** Program to Empty an Array *********************/
// var arr = [1,2,3];
// // arr = [];
// arr.splice(0,arr.length)
// console.log(arr);


/**************** Program to Add Element to Start of an Array *********************/
// var arr = [1,2,3];
// arr.unshift(4);
// console.log(arr);


/**************** Program to Remove Duplicates From Array *********************/
// var arr = [1,2,3,2,3,5,5,4,4];
// let uniqArr = [...new Set(arr)];
// console.log(uniqArr);


/**************** Program to Merge Two Arrays and Remove Duplicate Items *********************/
// var arr1 = [1,2,3];
// var arr2 = [2,3,4];
// let arr = arr1.concat(arr2);
// let uniqArr = [...new Set(arr)];
// console.log(uniqArr);


/**************** Program to Extract Given Property Values from Objects as Array *********************/
// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];
// objArray.map((elem)=>{
//     return(
//         console.log(elem.a)
//     )

// })



/**************** Program to Compare Elements of Two Arrays *********************/
// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// let a1 = JSON.stringify(arr1);
// let a2 = JSON.stringify(arr2);
// if(a1 == a2){
//     console.log("true");
// }else{
//     console.log("false");
// }



/**************** Program to Get Random Item From an Array *********************/
// const array = [1, 'hello', 5, 8];
// const randomItem = Math.floor(Math.random()*array.length);
// const result = array[randomItem];
// console.log(result);



/**************** Program To Perform Intersection Between Two Arrays *********************/
// const arr1 = [1,2,3,4,5]
// const arr2 = [1,3,5,6]

// function intersection(a1,a2){
//     const intersectionResult  = a1.filter((x)=>a2.includes(x));
//     return intersectionResult  

// }
// const result = intersection(arr1,arr2);
// console.log(result);



/**************** Program to Split Array into Smaller Chunks *********************/
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunk = 2;

// function splitIntoChunk(arr,chunk){
//     while(arr.length > 0) {
//         let tempArray;
//         tempArray = arr.splice(0, chunk);
//         console.log(tempArray);
//     }
// }
// splitIntoChunk(array , chunk);



/****************  Program To Check If A Variable Is undefined or null *********************/
// function checkVariable(value){
//   if(value == null){
//     console.log("null ")
//   }else{
//     console.log("not null");
//   }
// }
// let newArr
// checkVariable('hello');
// checkVariable(5);
// checkVariable(null);
// checkVariable(newArr);



/**************** Program to Set a Default Parameter Value For a Function *********************/
// function sum(x=5,y=10){
//     return x+y;
// }
// console.log(sum(3, 4));
// console.log(sum(7));
// console.log(sum());



/**************** Program to Generate a Random Number Between Two Numbers *********************/
// formula :- Math.floor(Math.random()*(max-min +1)) + min
// const max = 10;
// const min = 1;
// const result = Math.floor(Math.random()*(max - min +1)) + min;
// console.log(result);



/**************** Program To Get The Current URL *********************/
// const url1 = window.location.href;
// const url2 = document.URL;
// console.log(url1);
// console.log(url2);



/**************** Program to Validate An Email Address *********************/
// function validateEmail(email_id) {
//     const regex_pattern =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (regex_pattern.test(email_id)) {
//         console.log('The email address is valid');
//     }else {
//         console.log('The email address is not valid');
//     }
// }
// validateEmail('abc123@gmail.com');
// validateEmail('hello@com');



/****************  Program to Check If a Variable is of Function Type *********************/
// const count = true;
// const x = function(){
//     console.log("hello");
// };
// function test(variable){
//   if(typeof variable === 'function'){
//     console.log("function type variable");
//   }else{
//     console.log("not function type variable");
//   }
// }
// test(count);
// test(x);



/**************** Program To Work With Constants *********************/
