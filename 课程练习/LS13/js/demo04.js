//创建对象 三种方法
//通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);//结果：10
console.log(obj.str);//结果：Hi
console.log(obj.show());//结果：Hi
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);//结果：true

//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);//newObj的原型是obj
newObj.age = 23;
console.log(newObj.num);//结果：10
console.log(newObj.str);//结果：Hi
console.log(newObj.show());//结果：Hi
console.log(newObj.age);//结果：23
console.log(newObj.__proto__);//结果：{num: 10, str: "Hi", show: ƒ}
console.log(newObj.__proto__ === obj);//结果：true

//构造函数的方式创建JS对象  此处略讲，详情参照后续面向对象编程 注：JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();

//注意：
var objStr = new Object("xxx");
console.log(typeof objStr);//结果：object
console.log(objStr instanceof String);//结果：true

var objNum = new Object(23);
console.log(typeof objNum);//结果：object
console.log(objNum instanceof Number);//结果：true

var objBoolean = new Object(true);
console.log(typeof objBoolean);//结果：object
console.log(objBoolean instanceof Boolean);//结果：true

