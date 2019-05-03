// 调用栈 Call Stack
console.log("全局上下文-start");//结果：全局上下文-start
var x = 1;
function foo(){
    console.log("foo上下文-start");//结果：foo上下文-start
    var y = 2;
    function bar(){
        console.log("bar上下文-start");//结果：bar上下文-start
        var z = 3;
        console.log(x+y+z);//结果：6
        console.log("bar上下文-end");//结果：bar上下文-end
    }
    bar();
    console.log("foo上下文-end");//结果：foo上下文-end
}
foo();//设置断点
console.log("全局上下文-end");//结果：全局上下文-end