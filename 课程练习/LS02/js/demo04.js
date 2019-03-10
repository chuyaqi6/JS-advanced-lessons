(function(){
    var a1 = 100;
    var b1 = 100;
    console.log(a1 == b1);//结果：trure
    console.log(a1 === b1);//结果：true

    var a2 = new Number(200);
    var b2 = new Number(200);
    console.log(a2 == b2);//结果：false
    console.log(a2 === b2);//结果：false

    var a3 = new Number(200);
    var b3 = a3;
    console.log(a3 == b3);//结果：true
    console.log(a3 === b3);//结果：true

    b3 = new Number(200);
    console.log(a3 === b3);//结果：false

    var a4 = new Number(200);
    var b4 = 200;
    console.log(a4 == b4);//结果：true
    console.log(a4 === b4);//结果：false

    var a5 = {x:1,y:2};
    var b5 = {x:1,y:2};
    console.log(a5 === b5);//结果：false
    console.log(a5.x === a5.x);//结果：true
}())