/**************************************  objects create methods  ***************************************/

/****** 1 object constructor  *******/
// function Person(fname,lname){
//  this.fname = fname;
//  this.lname = lname
// }
// const newperson = new Person("nandini","mali");
// console.log(newperson.fname);

/******* 2 object create method ********/
// obj1={
//     name:"nandu"
// }
// var name = Object.create(obj1);
// console.log(name.name);

/******* 3 object classes *********/
// class vehical{
//     constructor(name){
//         this.name = name
//     }
// }
// let car1 = new vehical("gt");
// console.log(car1.name)

/******* 4 object literal ********/
// const person={
// name:"nandu"
// }
// console.log(person);



/******************* call method *******************/
// var obj1={
//     age:20,
//     getAge : function(){
//         return this.age;
//     }
// }
// var obj2 = {
//     age:54
// }
// var a = obj1.getAge.call(obj2);
// console.log(a);


/******************* apply method *******************/
// obj1={
//     name:"nandu"
// }
// function Name(msg){
//     console.log(msg + " "+ this.name);
// }
// Name.apply(obj1 , ["hii"]);


/******************* bind method *******************/ 
// obj1={
//     name:"nandu"
// }
// function Name(msg){
//     console.log(msg + " "+ this.name);
// }
// var mybind = Name.bind(obj1);
// mybind("hii")


/******************* slice method  *******************/
// var arr = [1,2,3,4,5];
// console.log(arr.slice(1,4));
// console.log(arr)

/******************* splice method *******************/
// var arr = [1,2,3,4,5];
// console.log(arr.splice(1,4));
// console.log(arr)

/*******************  first class function *******************/
// var a = function(){};
// function(){
//     return function(){

//     }
// }
// function1(function2());


/******************* first order function *******************/
// const firstOrder = ()  => console.log("hii");


/*******************  higher order function  *******************/
// const A = () => console.log("Hello");
// const B = (msg) => msg();
// B(A);


/******************* unary Function  *******************/
// const unaryFunction = (a) => console.log(a + 10);
// unaryFunction(2);


/*******************  curring function  *******************/
// function abc(l){
//   return function (b){
//     return function (h){
//         return l*b*h;
//     }
//   }
// }
// console.log(abc(2)(3)(4));


/******************* pure function  *******************/
// const add =(a,b)=>{
//     return a+b
// }
// console.log(add(2,5));



/******************* redeclare variables in switch block without an error  *******************/
// let count = 2;
// switch(count){
//     case 1:{
//         let name="nandu"
//         console.log(name);
//        break;
//     }
//     case 2:{
//         let name = "nandini"
//         console.log(name);
//         break;
//     }
// }


/******************* IIFE function  *******************/
// (function(){
//     console.log("hii")
// })();


/*******************  closure  *******************/
// function OuterFunction(){
//     var a = 10;
//     return function InnerFunction(){
//         console.log(a , "outer function variable");
//     }
// }
// const newFunc = OuterFunction();
// newFunc();


/*******************  Promises  *******************/
// var promise = new Promise(function(resolve,reject){
//     const x=2;
//     const y=2;
//     if(x===y){
//         resolve();
//     }else{
//         reject();
//     }
// })
// promise.then(function(){
//     console.log("success");
// }).catch(function(){
//     console.log("error");
// })



/*******************  callback function  *******************/
// function greet(msg){
//    return msg();
// }
// function callback(){
//     console.log("i am callback function");
// }
// greet(callback)


/*******************  object clone methods  *******************/
/***** 1 spreed operator (shallow copy) ******/
// var obj1={
//     name:"nandini",
//     lname: "mali"
// }
// var obj2={
//     ...obj1,
//     age:22
// }
// console.log(obj2)

/***** 2 rest operator *****/
// function sum (a,...b){
//     console.log(a,b);
// }
// sum(4,5,6);

/***** 3 object.assign({},obj) (shallow copy) *****/
// var obj={
//     name:"nandini",
//     age:22
// }
// var assign = Object.assign({},obj);
// console.log(assign.name,assign.age)

/***** 4 Json.parse(Json.stringify(objName)) (Deep copy) *****/
// var obj={
//     name:"nandini",
//     age:22
// }
// var assign = JSON.parse(JSON.stringify(obj));
// console.log(assign.name,assign.age)
// console.log(obj)



/*******************  Event Bubbling  *******************/ 
// const parent = document.getElementsByTagName("div")[0];
// const child = document.getElementsByTagName("button")[0];
// parent.addEventListener('click', () => {
//   console.log("parent was clicked")
// })
// child.addEventListener('click', () => {
//   console.log("child was clicked")
// })


/*******************  Event Capturing  *******************/
// let divs = document.getElementsByTagName("div");
// for(let i=0;i<divs.length;i++){
//     divs[i].addEventListener("click",EventCapturing,true);
// }
// function EventCapturing(){
//     alert(this.getAttribute("id"));
// }

/******************* setTimeOut method  *******************/
// setTimeout(function () {
//     console.log("Good morning");
//   }, 2000);


/*******************  setInterval Method  *******************/
// setInterval(function () {
//   console.log("Good morning");
//}, 2000);


/*******************  json parse and json stringify methods  *******************/
// var obj1=[3,7]
// var obj2='{"name":"nandu"}'
// console.log(JSON.stringify(obj1));
// console.log(JSON.parse(obj2));


/******************* function redirect  *******************/
 //function redirect(){
//     window.location.href="https://www.youtube.com/"
// }


/*******************  first letter of the string in an uppercase  *******************/
// var string="nandini";
// console.log(string.charAt(0).toUpperCase() + string.slice(1))


/*******************  Freeze Method  *******************/
// var obj = {
//     name:"nandini"
// }
// Object.freeze(obj);
// obj.name = "nandu";
// console.log(Object.freeze(obj));


/*******************  add getters and setters using defineProperty method  *******************/
// var obj = {counter : 0}
// Object.defineProperty(obj,"increment",{
//     get : function(){
//         this.counter++;
//     }
// })
// Object.defineProperty(obj , "decrement",{
//     get : function(){
//         this.counter--;
//     }
// })
// Object.defineProperty(obj,"add",{
//     set:function(value){
//         this.counter += value;
//     }
// })
// Object.defineProperty(obj,"subtract",{
//     set:function(value){
//         this.counter -= value;
//     }
// })
// obj.add = 10;
// obj.subtract = 5;
// console.log(obj.increment);
// console.log(obj.decrement);



/*******************  call the constructor of a parent class  *******************/
// class A{
//     constructor(num1){
//         this.num1 = num1;
//     }
//     fun1() {
//         console.log("parent class");
//     }
// }
// class B extends A {
//     constructor(num1 ,num2){
//         super(num1);
//         this.num2 = num2;
//         this.result = num1*num2;
//     }
//     fun2(){
//         super.fun1();
//         console.log("child class")
//     }
// }
// let obj = new B(3,2);
// obj.fun2();
// console.log(obj.result)



/*******************  map the array values without using map method  *******************/
// const countries =[
//     { name: "India", capital: "Delhi" },
//     { name: "US", capital: "Washington" },
//     { name: "Russia", capital: "Moscow" },
// ]
// const mapvalues = Array.from(countries,({capital})=>capital);
// console.log(mapvalues)


