//Part 1
var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

// typeof
console.log(typeof Array);//结果：function
console.log(typeof Function);//结果：function
console.log(typeof Date);//结果：function
console.log(typeof Number);//结果：function
console.log(typeof String);//结果：function
console.log(typeof Boolean);//结果：function
console.log(typeof Math);//结果：Object
console.log(typeof JSON);//结果：Object

// Part 2
// instanceof
console.log(Object instanceof Function);//结果：true
console.log(Object instanceof Object);//结果：true
console.log(Boolean instanceof Function);//结果：true
console.log(Boolean instanceof Object);//结果：true
console.log(String instanceof Function);//结果：true
console.log(String instanceof Object);//结果：true
console.log(Number instanceof Function);//结果：true
console.log(Number instanceof Object);//结果：true
console.log(Function instanceof Function);//结果：true
console.log(Function instanceof Object);//结果：true
console.log(Array instanceof Function);//结果：true
console.log(Array instanceof Object);//结果：true
console.log(Date instanceof Function);//结果：true
console.log(Date instanceof Object);//结果：true
console.log(Math instanceof Function);//结果：false
console.log(Math instanceof Object);//结果：true
console.log(JSON instanceof Function);//结果：false
console.log(JSON instanceof Object);//结果：true