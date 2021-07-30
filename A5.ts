//Function Name : Fibonacci
//Input:  21
//Output: 1  1  2  3  5  8  13  21
//Description: Program to  print Fibonacci series till that number.
//Author: Shubham Lodha
//Date: 31/07/2021


function Fibonacci(no:number):void
{
    var a:number=0;
    var b:number=1;
    var c:number;
    while(c!=no)
    {
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}

var no:number=21;
console.log("Fibonacci Series is:");
console.log(1);
Fibonacci(no);