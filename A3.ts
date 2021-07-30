//Function Name :Factors
//Input:  20
//Output: 1 2 5 10 
//Description: Program to print Factors of a numbers
//Author: Shubham Lodha
//Date: 31/07/2021


function Factors(no1:number):void
{
    var ans:number;
   for(var i=0;i<no1;i++)
    {
        if(no1%i==0)
        {
            console.log(i);
        }
    }
}

var no:number=20;
console.log("Factors of",no,"is")
Factors(no);
