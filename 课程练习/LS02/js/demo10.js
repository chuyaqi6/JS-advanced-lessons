var a = 123;
var b = new Number(a);

console.log(a == b);//结果：true
console.log(a === b);//结果：false

//临时包装对象
var str = "abcde";
console.log(str.length);//结果：5 
str.length = 1;
console.log(str.length,str);//结果：5 "abcde" 

var arr = [1,2,3,4];
console.log(arr.length);//结果：4
arr.length = 1;
console.log(arr.length,arr);//结果：1 [1]