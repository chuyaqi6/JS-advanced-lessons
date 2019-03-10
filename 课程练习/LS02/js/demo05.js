(function(){
    var str_a = "Hello World";
    function fn_a(arg){
        console.log(arg);//结果：Hello World
        arg = "Hai";
        console.log(str_a,arg);//结果：Hello World Hai
    };
    fn_a(str_a);
    console.log(str_a);//结果：Hello World

    var obj_a = {value:1};
    function fn_a(arg){
        arg.value = 3;
    };
    fn_a(obj_a);
    console.log(obj_a);//结果：value:3

    function fn_b(arg){
        arg = {value:2};
    };
    fn_b(obj_a);
    console.log(obj_a);//结果：value:3
}());