// 基本（原始）数据类型与引用（对象）类型的区别 内存分配方式不同
// 内存的分配方式影响变量的生命周期
// 函数局部变量中的值类型变量与引用类型变量

function foo(){
    var n = 10;
    var m = true;
    var str = "Hello World";//str 存在于栈区中

    var obj = { value: "Hello World" };//obj存在于栈区中，value内容存在于堆区中
}
foo();

var a = 23;
var b = 34;
console.log(window.a);
console.log(window.b);