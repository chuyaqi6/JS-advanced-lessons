console.log("1"+"2");//结果："12"
console.log("1"+2);//结果："12"
console.log(1+{});//结果："1[object Object]"
console.log(true+true);//结果：2
console.log("5"-2);//结果：3

var x = "1";
console.log(++x);//结果：2 ++和--的隐式类型转换
var x = "1";
console.log(x+1);//结果：11
var x = "1";
console.log(x+=1);//结果：11
var x = 1;
console.log(x+=1);//结果：2

var i=1;
var y = ++i + ++i + ++i;
console.log(y);//结果：9