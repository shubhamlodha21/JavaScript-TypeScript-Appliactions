/*The Addition of obj1 : 32
The Substraction of obj1 : -10
The Multiplication of obj1 : 231
The Division of obj1 : 0.5238095238095238
The Addition of obj2 : 30
The Substraction of obj2 : 10
The Multiplication of obj2 : 200
The Division of obj2 : 2*/

class Arithmetic
{
    no1:number
    no2:number
    ans:number

    constructor(x:number, y:number)
    {
        this.no1=x;
        this.no2=y;
    }

    Addition():number
    {
        this.ans=this.no1+this.no2;
        return this.ans;
    }

    Subtraction():number
    {
        this.ans=this.no1-this.no2;
        return this.ans;
    }

    Multiplication():number
    {
        this.ans=this.no1*this.no2;
        return this.ans;
    }

    Division():number
    {
        this.ans=this.no1/this.no2;
        return this.ans;
    }
};

var ret:number=0;
var obj1=new Arithmetic(11,21);
var obj2=new Arithmetic(20,10);

ret=obj1.Addition();
console.log("The Addition of obj1 :",ret);
ret=obj1.Subtraction();
console.log("The Substraction of obj1 :",ret);
ret=obj1.Multiplication();
console.log("The Multiplication of obj1 :",ret);
ret=obj1.Division();
console.log("The Division of obj1 :",ret);

ret=obj2.Addition();
console.log("The Addition of obj2 :",ret);
ret=obj2.Subtraction();
console.log("The Substraction of obj2 :",ret);
ret=obj2.Multiplication();
console.log("The Multiplication of obj2 :",ret);
ret=obj2.Division();
console.log("The Division of obj2 :",ret);
