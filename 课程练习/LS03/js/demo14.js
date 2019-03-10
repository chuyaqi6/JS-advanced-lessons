console.log("A" > "a");
console.log("B".localeCompare("A")); 
console.log("A".localeCompare("A")); 
console.log("A".localeCompare("B"));

var a = "abc";
var b = "def";
var c = a+b;

var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var arr6 = "abcdef".split("c");
var arr7 = "abcdef".split("c",1);
var arr8 = "abcdef".split("c",2);

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);

var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);
console.log(str13,str14);

var str15 = str13.substring(2,5);
console.log(str13,str15);