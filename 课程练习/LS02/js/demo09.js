var obj = {x:1,y:2};
console.log(obj.__proto__ === Object.prototype);//结果：treu
console.log(Object.prototype);

var arr = [1,2,3,4,5];
console.log(arr.__proto__ === Array.prototype);//结果：true
console.log(Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);//结果：true

function foo() { 
    console.log("foo function!");
};
console.log(foo.__proto__ === Function.prototype);//结果：true
console.log(foo.__proto__.__proto__ === Object.prototype);//结果：true

console.log(obj instanceof Object);//结果：true
console.log(arr instanceof Object);//结果：true
console.log(foo instanceof Object);//结果：true
console.log(foo === window.foo);//结果：true

for(var k in obj){
    console.log(k,obj[k]);//结果：x 1 
                          //结果：y 2
}
console.log(Object.keys(obj));//结果：["x", "y"]
console.log("x" in obj);//结果：true

for(var k in foo){
    console.log(k,foo[k]);
}
console.log("call" in foo);//结果：true
console.log("apply" in foo);//结果：true
console.log("arguments" in foo);//结果：true
