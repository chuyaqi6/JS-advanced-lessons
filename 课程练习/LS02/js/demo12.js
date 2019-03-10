var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);//结果：boolean false
console.log(typeof (a==b),a==b);//结果：boolean false
console.log(typeof (a<b),a<b);//结果：boolean true

var c = "img" + 3 +".jpg";
var d = "23" - 5;
console.log(c,d);//结果：img3.jpg 18

var e = !23;
var f = !!34;
var g = !!{};
console.log(e,f,g);//结果：false true true

var h = {x:1};
if(h){
    console.log("h:",h);//结果：{x:1}
}