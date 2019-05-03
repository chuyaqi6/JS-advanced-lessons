//通过构造函数创建的对象的原型共享问题
//以下写法实现了原型继承，但存在原型共享的问题
//思考，name,age,id属性分别是添加到了那个对象上，这样写有什么问题？
//如何给每个Studnent对象添加自有的name属性
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);

//测试如下代码，思考为什么，这样的继承有什么弊端
console.log(s1.name,s1.age,s1.id);//结果：Mike 22 2017001
console.log(s2.name,s2.age,s2.id);//结果：Mike 22 2017002
s1.__proto__.name = "Jack";
console.log(s2.name);//结果：Jack
s2.__proto__.__proto__.age = 99;
console.log(s2.age);//结果：99

// console.log(s1);
// console.log(s1.__proto__);
// console.log(s1.__proto__.__proto__);

//如何给每个student对象单独添加自身属性name和age，内存是否浪费
s1.name = "Bill";
s1.age = 22;
s2.name = "Colin";
s2.age = 23;