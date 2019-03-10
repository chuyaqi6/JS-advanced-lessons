console.log(Boolean(undefined));//结果：false
console.log(Boolean(null));//结果：false
console.log(Boolean(0));//结果：false
console.log(Boolean(NaN));//结果：false
console.log(Boolean(1));//结果：true
console.log(Boolean(""));//结果：false
console.log(Boolean("abc"));//结果：true
console.log(Boolean({}));//结果：true

if(new Boolean(false)){
    console.log("执行");//结果：执行
}

console.log(Number(undefined));//结果：NaN
console.log(Number(null));//结果：0
console.log(Number(true));//结果：1
console.log(Number(false));//结果：0
console.log(Number(""));//结果：0
console.log(Number("abc"));//结果：NaN
console.log(Number("123.345xx"));//结果：NaN
console.log(Number("32343,345xx"));//结果：NaN
console.log(Number({x:1,y:2}));//结果：NaN

console.log(parseFloat("123.345xx"));//结果：123.345
console.log(parseFloat("32343,345xx"));//结果：32343
console.log(parseInt("123.345xx"));//结果：123
console.log(parseInt("32343,345xx"));//结果：32343

console.log(String(undefined));//结果：undefined
console.log(String(null));//结果：null
console.log(String(true));//结果：true
console.log(String(false));//结果：false
console.log(String(0));//结果：0
console.log(String(234));//结果：234
console.log(String({x:1,y:2}));//结果：[object Object]