//Part 1 constructor属性的应用

// 1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);//结果：Foo

// 2 创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);//结果：Constr {name: "Mike"}
console.log(y instanceof Constr);//结果：true

// 3 constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //结果：function person()
console.log(Father.prototype.constructor); //结果：function person()
Father.prototype.constructor = Father;     //修正constructor指向
console.log(Father.prototype.constructor); //结果：function father()
var one = new Father(25);


//Part2 公有属性、私有属性、特权方法
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);//结果：123
// console.log(a.privateId);
a.getId();//结果：123 456


//思考哪些是true，哪些是false
function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
// Person.prototype = { //测试如果更改了Person.prototype输出又会变成什么?
// 	getName:function(){}
// }
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);//结果：true
console.log(p.__proto__ === p.constructor.prototype);//结果：true
console.log(Object.prototype === p.constructor.prototype);//结果：false
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);//结果：false?