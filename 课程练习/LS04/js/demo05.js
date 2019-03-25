function sloppyFunc(){
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);

function sloppyFunc(){
    // 'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);