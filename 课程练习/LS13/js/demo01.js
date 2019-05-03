//JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
console.log(obj.num);//结果：10
console.log(obj.str);//结果：Hi
obj.show();			 //结果：Hi