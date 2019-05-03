//静态方法实例与原型方法实例
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){//定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();//结果：This is a static method
var instance1 = new BaseClass();
instance1.f2();//结果：This is a prototype method


//思考下述案例 实例方法 原型方法
var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();//结果：1 This is a method in Base.prototype

instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();//结果：2 This is a method in instance1
