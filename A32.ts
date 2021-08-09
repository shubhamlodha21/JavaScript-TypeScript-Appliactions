/*Area of Circle is 314
Area of Circle is 1384.74*/


class Circle
{
    r:number;
    PI:number;
    ans:number;

    constructor(x:number)
    {
        this.r=x;
        this.PI=3.14;
    }

    Area():number
    {
        this.ans=this.PI*this.r*this.r;
        return this.ans;
    }
}


var ret:number=0;
var Obj1=new Circle(10);
var Obj2=new Circle(21);

ret=Obj1.Area();
console.log("Area of Circle is",ret);

ret=Obj2.Area()
console.log("Area of Circle is",ret);



