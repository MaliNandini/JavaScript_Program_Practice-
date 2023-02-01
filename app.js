/********************  1:->  Prime Number  *********************/

// let isPrime = true;
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
// }
//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// else {
//     console.log("The number is not a prime number.");
// }

/*********************  2:->  Prime Number with user input   *********************/

// document.getElementById("btn").onclick = function(){
//   var num = document.getElementById("ip").value;
//   for(let i=3; i<num; i++){
//     if(i%2 == 0 ){
//      console.log(`${i} not prime number`)
//     }
//     else{
//       console.log(`${i}  prime number`)
//     }
//   }
// }

/*********************  3:->  Fibonacci Series   *********************/

// var num1=0,num2 =1;
// var next_num =0;
// var fibonacci_series= 10;
// console.log(num1);
// console.log(num2);
// for(let i=1 ; i<=fibonacci_series;i++){
//   next_num = num1+num2;
//   num1 = num2;
//   num2= next_num;
//   console.log(next_num);
// }

/*********************  4:->  Reverse String   *********************/

// var str = "nandini mali";
// var reverse_string = "";
// for(let i=str.length-1; i>=0; i--){
//  reverse_string += str[i];
// }
// console.log(reverse_string);

/*********************  5:->  Factorial Number   *********************/

// var num = 5;
// let temp = 1;
// for(let i=num ; i>=1; i--){
//   temp = temp*i;
// }
// console.log(temp)

/*********************  6:->  Sort an  Array  *********************/

// let arr = [10,15,13,12,14,11];
// for(let i=0; i<arr.length; i++){
//   for(let j=0; j<i; j++){
//     if(arr[i]<arr[j]){
//       var temp = arr[i];
//       arr[i]=arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

/*********************  7:-> Add Array Elements  *********************/

// let arr=[1,2,3,4,5,10,5,10];
// var sum = 0;
// for(let i=0; i<arr.length; i++){
//   sum += arr[i];
// }
// console.log(sum);

/*********************  8:->  Find String & Number in an Array  *********************/

// var array = [1,2,"A","B",4,5,"C"];
// var strArray =[];
// var numArray = [];
// array.map(element=>{
//   if(typeof(element) === "string"){
//     strArray.push(element);
//   }
//   else{
//     numArray.push(element)
//   }
// })
// var newArr = strArray.concat(numArray);
// console.log(newArr);

/*********************  9:->  Highest Occrrence in an Array  *********************/

// let arr = [1,2,3,4,1,1,2];
// let result = {};
// for(let i=0; i<arr.length; i++){
//   if(arr[i] in result){
//     result[arr[i]] += 1;
//   }
//   else{
//     result[arr[i]] = 1;
//   }
// }
// const resultKey = Object.keys(result);
// const resultValues = Object.values(result);
// console.log(result);
// console.log(resultKey);
// console.log(resultValues);

/*********************  10:->  Polyfill of Map Method  *********************/

// const arr = [1,2,3,4,5]
// function sqr(x){
//   return x*x;
// }
// function MapPolyfill(arr,cb){
//   let newarr = []
//   for(let i=0; i<arr.length; i++){
//     newarr.push(cb(arr[i]))
//   }
//   return newarr;
// }
// console.log(MapPolyfill(arr , sqr));

/*********************  11:->  Polyfill of Filter Method  *********************/

// const arr= [1,2,3,4,45,5,6];
// function isEven(x){
//   if(x%2===0){
//     return x
//   }
// }
// function filterPoly(arr ,cb){
//   let newarr=[];
//   for(let i=0; i<arr.length; i++){
//     if(cb(arr[i])){
//       newarr.push(arr[i]);
//     }
//   }
//   return newarr;
// }
// console.log(filterPoly(arr,isEven));

/*********************  12:->  Polyfill of Reduce Method  *********************/

// const num = [1,2,3,4,5];
// Array.prototype.myReduce = function(cb , initialValue){
//   var acc= initialValue;
//   for(let i=0; i<this.length; i++){
//     acc = acc? cb(acc , this[i],i,this) : this[i];
//   }
//   return acc;
// }
// const sum = num.myReduce((acc , curr, i ,arr)=>{
//   return acc+curr;
// },0);
// console.log(sum);

/*********************   13:-> Find Max Number with sort an array   *********************/

// let arr = [1,2,3,4,5,10,2,0];
// for(let i=0; i<arr.length; i++){
//   for(let j=0; j<i; j++){
//     if(arr[i]<arr[j]){
//       var temp = arr[i];
//       arr[i]=arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr.slice(-1));

/*********************   14:-> Find Max Number without sort an array   *********************/

// let arr = [1,2,3,4,5,10,2,50];
// var max=0;
// for(let i=0; i<arr.length; i++){
//   if(max < arr[i]){
//     max = arr[i];
//   }
// }
// console.log(max)

/*********************   15:-> Find Min Number without sort an array   *********************/

// let arr = [2,1,3,4,5,10,0,50,70];
// var min= arr[0]
// for(let i=0; i<arr.length; i++){
//   if(min>arr[i]){
//     min = arr[i]
//   }
// }
// console.log(min)

/*********************   16:->  Find Occrrence of an String    *********************/

// let str = "inthenameoftheorganisation";
// let result={};
// for(let i=0; i<str.length; i++){
//   if(str[i] in result){
//     result[str[i]] += 1;
//   }
//   else{
//   result[str[i]] = 1;
//   }
// }
// console.log(result);

/*********************    17:->  Find Repeated number in an array    *********************/

// let arr = [1,2,1,3,2,4,5,4];
// var Repeated=[] ;
// for(let i=0; i<arr.length; i++){
//  for(let j=0; j<i; j++){
//    if(arr[i] == arr[j]){
//      Repeated.push(arr[j]);
//     }
//   }
// }
// console.log("Repeated values",Repeated);

/*********************   18:->  Find UnRepeated number in an array    *********************/

// var arr = [1,2,1,3,5,4,4];
// var uniqArr = [];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr.length; j++) {
//     if (arr[i] == arr[j] && i != j) break;
//     else if (j == arr.length - 1){
//       uniqArr.push(arr[i])
//     }
//   }
// }
// console.log(uniqArr)

/*********************    19:->  sum of two array matrix  *********************/

// let a = [[1,2],[3,4]];
// let b = [[5,6],[7,8]];
// let c = [[],[]];
// for(let i=0; i<a.length; i++){
//   for(let j=0; j<a.length; j++){
//     c[i][j] = a[i][j]+b[i][j];
//   }
// }
// console.log(c)

/*********************  20:-> Caluculate the item of an array until get single digit    *********************/

// let num = 12345;
// function getSingleDigit(num){
//   let add =  num.toString().split("").map((item)=>{
//     return parseInt(item)
//   }).reduce((acc,cur)=>{
//    return acc + cur
//   },0)
//   console.log(add)
//   if(add > 9){
//    getSingleDigit(add);
//   }
// }
// getSingleDigit(num)

/*********************    21:->  Convert an string to UpperCase  *********************/

// let str = "i am learning javascript";
// let resulte = str.toUpperCase();
// console.log(resulte)

/*********************    22:-> convert  1st letter of string each words to UpperCase  *********************/

// let str = "i am learning javascript";
// function capital_letter(str) {
//   let lowercaseStr = str.toLowerCase();
//   let result = lowercaseStr.split(" ");
//   for(let i=0; i<result.length; i++){
//     result[i] = result[i][0].toUpperCase() + result[i].substring(1);
//   }
//   return result.join(" ");
// }
// console.log(capital_letter(str));

/*********************    23:-> longest word in a string  *********************/

// let str = "i am learning javaScript";
// let strSplit = str.split(" ");
// console.log(strSplit);
// let maxLength = 0;
// let longestWord = ' ';
// for(let i=0; i<strSplit.length; i++){
//  if(strSplit[i].length > maxLength){
//     maxLength = strSplit[i].length;
//     longestWord = strSplit[i];
//  }
// }
// console.log(maxLength);
// console.log(longestWord);

/*********************    24:-> Polyfill of Call method  *********************/

// const obj = {
//   name : "Ram",
// }
// function getName(city){
//   console.log(`${this.name} is a good boy.`+"come from " + city );
// }
// Function.prototype.myCall = function(obj , ...args){
//   obj.fn = this;
//   obj.fn(...args);
// }
// getName.myCall(obj,"indore");

/*********************    25:-> Polyfill of Apply method  *********************/

// const obj = {
//   name : "Ram",
// }
// function getName(city ,country){
//   console.log(`${this.name} is a good boy.` + "come from " + city + country);
// }
// Function.prototype.myApply = function(obj , ...args){
//   obj.fn = this;
//   obj.fn(...args);
// }
// getName.myApply(obj,["indore","India"]);

/*********************    26:-> Polyfill of Bind method  *********************/

// const obj = {
//   name : "Ram",
// }
// function getName(city){
//   console.log(`${this.name} is a good boy.` + city);
// }
// Function.prototype.myBind = function(obj , ...args){
//   const fun = this;
//   return function(...moreArgs){
//     obj.fn = fun;
//     obj.fn(...args , ...moreArgs);
//   }
// }
// const bindFunction = getName.myBind(obj , "indore");
// bindFunction();

/*********************    27:-> Remove zero from the string of array  *********************/

// let str = ["101","001","20","002007"];
// for(let i=0; i<str.length; i++){
//     console.log(str[i].replaceAll('0', ''));
// }

/*********************    28:-> sum of next five even number  *********************/

//  const num = 5;
// var sum=0 ;

//   for(let i=num; i<15; i+=2){
//      if(i%2===0){
//        sum += i;
//      }
//   }
//   console.log(sum)

/**********************  29:-> sort an array in descending order  ***********************/
// let number = [1,4,3,5,2]
// console.log(number.sort((a,b)=>b-a))
