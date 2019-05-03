// Part 1
console.log(a);//结果：undefined
var a = 1;
console.log(a);//结果：1

//上边代码等价如下 解析器眼中的代码
var a;
console.log(a);
a = 1;
console.log(a);

console.log(a,b);//结果：1 undefined
var b = 23;
console.log(a,b);//结果：1 23
var a = b;
console.log(a,b);//结果：23 23

console.log(obj1,obj2);//结果：undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//结果：{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//结果：{x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);//结果：{x:25} {x:25}

// Part 2
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2

// Part 3
foo();
var foo = function(){
    console.log("foo");
};

console.log(foo);
var foo = function(){
    console.log("foo");
};
foo();//结果：报错

// Part 4
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();
