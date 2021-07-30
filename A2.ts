//Function Name : Area
//Input:  15
//Output: Area of Circle is 149.89
//Description: Program to print Area of Circle
//Author: Shubham Lodha
//Date: 31/07/2021



function Area(no1:number,PI:number=3.14):number
{
    return PI*no1*no1;
}

var iRet:number;
iRet=Area(15);
console.log("Area of Circle is ",iRet)
