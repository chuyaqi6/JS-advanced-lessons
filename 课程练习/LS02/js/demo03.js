(function(){
    //基本（原始）数据类型与引用（对象）类型的区别 赋值方式不同
    var str_a = "a"; 
    var str_b = str_a;
    str_b = "b"; 
    console.log(str_a,str_b);

    var obj_a = {v:"a"}; 
    var obj_b = obj_a;
    obj_b.v = "b"; 
    console.log(obj_a,obj_b);

    obj_b = {v:"c"}; 
    console.log(obj_a,obj_b);
}());

var obj_c = {x1:2,y1:3};
var obj_d = {x2:2,y2:3};
console.log(obj_c.x1 === obj_d.x2);//结果：true
console.log(obj_c === obj_d);//结果：false

console.log({m:1} === {m:1});//结果：false

var a = 123;
function foo1(x){
    x = 345;
}
foo1(a);
console.log(a);//结果：123

var a = {y:123};
function foo2(x){
    x.y = 345;
}
foo2(a);
console.log(a.y);//结果：345

var a = {y:123};
function foo3(x){
    x.y = 345;
    x = {y:456};
}
foo3(a);
console.log(a.y);//结果：345

var a = {y:123};
function foo4(x){
    x = {y:456};
    x.y = 345;
}
foo4(a);
console.log(a.y);//结果：123