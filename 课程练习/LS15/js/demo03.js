///////////Part1 原型链综述////////////
var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//结果：1
console.log(obj.y);//结果：2
console.log(obj.z);//结果：3

console.log("z" in obj);//结果：true
console.log(obj.hasOwnProperty("z"));//结果：false

///////////Part2 原型链属性操作////////////
obj.z = 5;

console.log(obj.hasOwnProperty("z"));//结果：true
console.log(obj.z);//结果：5
console.log(proObj.z);//结果：3

obj.z = 8;
console.log(obj.z);//结果：8

delete obj.z;//true
console.log(obj.z);//结果：3

delete obj.z;//true
console.log(obj.z);//结果：3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//结果：undefined

//注意：hasOwnProperty是原型方法
//调用的主体为obj,先在自身上找该方法，找不到的话去原型链上去找
//区别与Object.keys(obj)这种静态方法