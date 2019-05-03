function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);//结果：Jack
console.log(p1.age);//结果：20
p1.sayHi();//结果：Hi,i'm Jack