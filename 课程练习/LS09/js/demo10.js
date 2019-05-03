if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);//结果：j:undefined
    var j = 10;
    console.log("j:",j);//结果：j:10
}
foo();

console.log("i:",i);//结果：i:0
console.log("j:",j);//结果：报错

//上边代码等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);//结果：j:undefined
    j = 10;
    console.log("j:",j);//结果：j:10
}
foo();

console.log("i:",i);//结果：i:0
console.log("j:",j);//结果：报错