function foo(){}
console.log(foo);
console.log(typeof foo);//结果：function
console.log(foo instanceof Object); //结果：true
console.log(foo instanceof Function);//结果：true
console.log(foo === window.foo);//结果：true

console.log(typeof Function);//结果：function
console.log(typeof Array);//结果：function
console.log(typeof Date);//结果：function
console.log(typeof Error);//结果：function
console.log(typeof Math);//结果：object
console.log(typeof JSON);//结果：object

console.log(typeof new Function());//结果：function
console.log(typeof new Array()); //结果：object
console.log(typeof new Date());	 //结果：object

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

