var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//结果：6
console.log(sum(1,2));//结果：8
console.log(sum(1));//结果：10
// console.log(sum(1,0,0));

//优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//结果：6
console.log(sum(1,2));//结果：8
console.log(sum(1));//结果：10
console.log(sum(1,0,0));//结果：1