function thisTest(){
    console.log(this === window);
}
thisTest();

var a = 10,b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();//结果：true
console.log(a,c);//结果：20 “新添加属性”
console.log(b);//结果：Hi

