var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2));//结果：23
console.log(parseFloat("23.456xy"));//结果：23.456
console.log(parseInt === window.parseInt);//结果：true
console.log(parseFloat === window.parseFloat);//结果：true

console.log(Math.ceil(a2));//结果：24
console.log(Math.floor(a2));//结果：23
console.log(Math.round(a2));//结果：23
a3 = 5e2;
console.log(a3);//结果：500
console.log(typeof Math);//结果：object

var x = Number("xis021");
console.log(x);//NaN
console.log(isNaN(x));//结果：true
console.log(typeof NaN);//结果：number

console.log(Math.log(-1));//结果：NaN
console.log(Math.acos(2));//结果：NaN
console.log(NaN === NaN);//结果：false

var y1 = 2/0;
console.log(y1);//结果：Infinity
var y2 = -2/0;
console.log(y2);//结果：-Infinity
console.log(isFinite(y2));//结果：false
console.log(isFinite(23));//结果：true

var z1 = 1/Infinity;
console.log(z1);//结果：0
var z2 = -1/Infinity;
console.log(z2);//结果：-0