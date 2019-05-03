//闭包实例
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());//结果：1
console.log(d.count());//结果：1
console.log(c.reset());//结果：0
console.log(c.count());//结果：1
console.log(d.count());//结果：2