 // 1 console.log("hello world");

// 2 const num1 = 20;
//  const num2 = 50;
//  const result = num1+num2;
//  console.log(result);


// 3 const num = 9;
// const result = Math.sqrt(num);
// console.log(result);



// 4 const base = 3;
// const height = 5;
// const result = (base*height)/2;
// console.log(result);
// const A = 3;
// const B = 4;
// const C = 2;
// const s = (A*B*C)/2;
// const result = s* Math.sqrt((s-A)*(s-B)*(s-C));
// console.log(result);



// 5 var num1 = 20;
// var num2 = 50;
// [num1,num2]=[num2,num1];
// var temp = num1;
// num1 = num2;
// num2 =temp;
// console.log(num1,num2);



// 7 const km = 3;
// const miles = km*621371;
// console.log(miles);



// 8 const celsium = 5;
// const fah =  (celsium*1.8)+32;
// console.log(fah); 



// 9 const num = Math.floor(Math.random()*(10-1)+1);
// console.log(num);



// 10 const num = 0;
// if(num == 0){
//     console.log("num is zero");
// }else if(num > 0){
//     console.log("positive num");
// }else{
//     console.log("nagetive number");
// }



// 11 const num = 7;
// if(num%2 == 0){
//     console.log("even number");
// }else{
//     console.log("odd number");
// }


// 12 const num1 = 70;
// const num2 = 50;
// const num3 = 40;
// if(num1>num2 && num1>num3){
//     console.log("num1 is largest number");
// }else if(num2>num1 && num2>num3){
//     console.log("num2 is largest number");
// }else{
//     console.log("num3 is largest number");
// }



// 13 const number = 25;
// let isPrime = true;
// if(number>1){
//     for(let i=2; i<number; i++){
//        if(number%i == 0){
//         isPrime = false;
//         break;
//        }
//     }
//     if(isPrime){
//         console.log("prime number")
//     }else{
//         console.log("not prime");
//     }
// }else{
//     console.log("plz enter the positive number");
// }



// 15 const number = 20;
// for(let i=1; i<=number;i++){
//     if(number%i == 0){
//         console.log(i);
//     }
// }



// 16 const num = 3;
// for(let i=1; i<=10;i++){
//     var table = num*i;
// console.log(num + " "+ "*"+ " "+i+" "+"="+ " "+ table);
// }


// 17 var num1 = 0;
// var num2 = 1;
// var fibbonacyNumber = 10;
// console.log(num1);
// console.log(num2);
// for(let i=2; i<=fibbonacyNumber;i++){
//     var temp = num1+num2;
//     num1 = num2;
//     num2 = temp;
//     console.log(temp);
// }



// 20 const num1 = 50;
// const num2 = 20;
// var operation = "/";
// switch (operation) {
//     case "+":{
//         const add = num1+num2;
//         console.log(add)
//     }
//     break;
//     case "*":{
//         const mul = num1*num2;
//         console.log(mul)
//     }
//     break;
//     case "-":{
//         const sub = num1-num2;
//         console.log(sub)
//     }
//     break;
//     case "/":{
//         const div = num1/num2;
//         console.log(div)
//     }
//     break;
//     default:
//         break;
// }



// 21 const number = 5;
// var sum = 0;
// for(let i=1;i<=number;i++){
//     sum+=i;
// }
// console.log(sum);



// 22 var num1 = 38;
// var num2 = 28;
// var num3 = 48;
// var result1 = num1%10;
// var result2 = num2%10;
// var result3 = num3%10;
// if(result1 == result2 && result1 == result3){
//     console.log("same");
// }else{
//     console.log("not same");
// }


// 33 const string = "dad";
// const sp = string.split('');
// const rev = sp.reverse();
// const jn = rev.join('');
// if(string == jn){
//     console.log("palindrom");
// }else{
//     console.log("not palindrom");
// }



// 34 const string = "hadfbgwjs";
// const sp = string.split('');
// const result =sp.sort();
// const jn = result.join('');
// console.log(jn);


// 35 const string = "javascriptabfabfda";
// const result = string.replaceAll('a','A');
// console.log(result);


// 36 const string = "Nandini";
// const sp = string.split('');
// const rev = sp.reverse();
// const result = rev.join('');
// console.log(result)

// 37  Object literal
// const obj = {
//     name:"nandini",
//     city : "Indore"
// }
// console.log(obj); 

// 38 const string = "nandini";
// const findChar= "a";
// function findstr(str,ltr){
//     let count=0;
//     for(let i=0; i<str.length; i++){
//         if(str.charAt(i) == ltr){
//             count+=1;
//         }
//     }
//     return count;
// }
// const result = findstr(string,findChar);
// console.log(result);


// 39 const string = "javascript";
// const result = string.charAt(0).toUpperCase() + string.slice(1);
// console.log(result);


//40 const string = "nandini";
// const count = string.match(/[aeiou]/gi).length;
// console.log(count);

// 41 const obj = {
//     name :"ram",
//     age:40,
//     city:"indore"
// }
// console.log(obj);
// delete obj.city;
// console.log(obj);

// 43 const obj={
//     name:"ram",
//     age:40
// }
// const hasKey = 'name' in obj;
// if(hasKey){
//     console.log("true");
// }else{
//     console.log("false");
// }

// 44 spreed operator
// const obj = {
//     name:"ram",
//     age:40
// }
// const obj2 = {
//     ...obj,
//     gender : "male"
// }
// console.log(obj2)

//44  object assign({},obj)
// const obj = {
//     age:40,
//     gender:"female"
// }
// const obj2 = Object.assign({},obj);
// obj2['name'] = "sita";
// console.log(obj2);

// 44 Json.parse(Json.stringify())
// const obj1 = {
//     age:40,
//     city:"pune"
// }
// const obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(obj2);


// 46 const obj1 = {
//     name:"radha"
// }
// const obj2 ={
//     ...obj1,
//     age:20
// }
// console.log(obj2)


//47 const obj = {
//     name:"abc",
//     age:50
// }
// const result = Object.keys(obj).length;
// console.log(result);

// 48 const obj = {
//     name:"radha"
// }
// obj['age']=50;
// console.log(obj);



//50 const string = `hii, i am
// learning 
// javascript`
// console.log(string);

// 52 const result = Math.random().toString(36).substring(2,5);
// console.log(result);

// 53 const string="hello javascript";
// const result = string.startsWith("hello");
// console.log(result)


// 54 const string = '   hello world   ';
// const result = string.trim();
// console.log(result)

// 55 const obj = {
//     name:"nandu"
// }
// const result = String(obj);
// console.log(typeof result);
// console.log(typeof obj);



// 56 const string= "i am learning javascript";
// const checkstr = "javascript";
// const result = string.includes(checkstr);
// console.log(result);



// 57 const string = "hello";
// const str = "hello";

// if(string === str){
//     console.log("true");
// }else{
//     console.log("false");
// }


// 61 const date = new  Date();
// const newDate = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log(time);

//constructor method
// function person(fn,ln){
//     this.first = fn;
//     this.last = ln;

// }
// const personD = new person("nandini","mali");
// console.log(personD.first);


// create object
// const obj ={
//     name:"ram",
//     age:30
// }
// const newobj = Object.create(obj);
// console.log(newobj.age);
