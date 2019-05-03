//闭包引入案例(思考下述两个案例的区别,那个x始终未被释放)
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
//观察f1中的x变量
console.log(f3);//结果：1
console.log(f3);//结果：1

// 例一
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//结果：6
console.log(inc(2));//结果：8
inc = createInc(5);
console.log(inc(1));//结果：6

// 例二
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//结果：6
console.log(inc(2));//结果：8
var inc2 = createInc(5);
console.log(inc(1));//结果：9
console.log(inc2(1));//结果：6

// 例三
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();//结果：1
foo();//结果：1

// 例四
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//结果：1
a();//结果：2
b();//结果：1