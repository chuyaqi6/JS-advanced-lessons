var str = "abc_def_ghi_jkl_mn";
console.log("abc\ndefghi\\\n\'mn\'");//结果：abc defghi\ 'mn'
var str = "abc_def_ghi_jkl_mn";
console.log(str.split("_"));//结果：["abc", "def", "ghi", "jkl", "mn"]
console.log(str.split("_",2));//结果：["abc", "def"]
console.log(str.concat("_opq"));//结果：abc_def_ghi_jkl_mn_opq
console.log(str.substr(4,7));//结果：def_ghi
console.log(str.substring(4,7));//结果：def
console.log(str.slice(2));//结果：c_def_ghi_jkl_mn
console.log(str.slice(2,5));//结果：c_d
console.log(str.slice(-2));//结果：mn
console.log(str.slice(2,-2));//结果：c_def_ghi_jkl_
console.log(str.bold());//结果：<b>abc_def_ghi_jkl_mn</b>
console.log(str.link());//结果：<a href="undefined">abc_def_ghi_jkl_mn</a>
console.log(str.fontcolor("red"));//结果：<font color="red">abc_def_ghi_jkl_mn</font>
console.log(str.fontsize(50));//结果：<font size="50">abc_def_ghi_jkl_mn</font>