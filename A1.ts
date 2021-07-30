//Function Name : Maximum
//Input:  10  80 -22 
//Output: 80
//Description: Program to print Maximum of three number
//Author: Shubham Lodha
//Date: 31/07/2021

function Maximum(no1:number,no2:number,no3:number):number
{
    if(no1>no2&&no1>no3)
    {
        return no1;
    }
    else if ((no2>no1)&&(no2>no3))
    {
        return no2;     
    }
    else 
    {
        return no3;
    }
}

var iRet:number
iRet=Maximum(10,80,-22);
console.log("Maximum Number:",iRet);

