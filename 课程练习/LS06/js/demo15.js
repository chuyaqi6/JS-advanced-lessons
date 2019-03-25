//操作数非布尔类型，&&短路原则
console.log(2&&4);//结果：4
console.log(0&&4);//结果：0
console.log({x:2}&&{name:"Jack"});//结果：{name:"Jack"}
console.log(null&&"hello");//结果：null
console.log({}&&"world");//结果：world

//操作数非布尔类型，||短路原则
console.log(2||4);//结果：2
console.log(0||4);//结果：4
console.log({x:2}||{name:"Jack"});//结果：{x:2}
console.log(null||"hello");//结果：hello
console.log({}||"world");//结果：{}

console.log((new Boolean(false))&&234);//结果：234
console.log((new Boolean(false))||234);//结果：Boolean{false}