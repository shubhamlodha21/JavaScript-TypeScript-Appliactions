//Function Name :Addition,Substraction
//Input: 100 20
//Output:
//Addition is 120
//Substraction is 80

//Description: Program to Perform Addition and Substraction od Number

//Author: Shubham Lodha
//Date: 01/08/2021

function Addition(no1:number, no2:number):number
    {
       return  no1+no2;
    }

function Substraction(no1:number,no2:number):number
    {
        return no1-no2;
    }

var iRet:number;
iRet=Addition(100,20);
console.log("Addition is "+iRet);

iRet=Substraction(100,20);
console.log("Substraction is"+iRet);

