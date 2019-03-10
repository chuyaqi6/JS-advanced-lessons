var a;
console.log(a);//结果：undefined

function foo(x,y) {
    console.log(x,y);//结果：1 undefined
}
foo(1);

function fee() {

}
var feeReturnValue = fee();
console.log(feeReturnValue);//结果：undefined

console.log(typeof null);//结果：object