//Function Name :Addition,Substraction
//Input: 100 20

//Output:
//Addition is 120
//Substraction is 80

//Description: Program to Perform Addition and Substraction of Number using Object Orientation
//Author: Shubham Lodha
//Date: 08/08/2021


// Class Declaration
class Arithematic
{
    // Characteristics
    No1 : number;
    No2 : number;
    ans : number;
    // Behaviour
    constructor(x : number, y : number)
    {
        this.No1 = x;
        this.No2 = y;
        this.ans = 0;
    }
    Addition(): number 
    {
        this.ans = this.No1 + this.No2;
        return this.ans;
    }
    Substraction(): number 
    {
        this.ans = this.No1 - this.No2;
        return this.ans;
    }
}
var ret : number = 0;
var obj1 = new Arithematic(10,11);
var obj2 = new Arithematic(20,11);
ret = obj1.Addition();
console.log("Addition of obj1 is : ",ret);
ret = obj2.Addition();
console.log("Addition of obj2 is : ",ret);