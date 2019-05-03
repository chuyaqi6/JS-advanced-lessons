function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);//结果：Point {x: 2, y: 3}


Point(5,6);
console.log(window.x,window.y);//结果：5 6