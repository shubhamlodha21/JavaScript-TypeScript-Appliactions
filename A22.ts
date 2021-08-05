//Function Name :Summation
//Input:--
//Output:Summation of all Number is 52
//Description:Display Sum of all numbers of  Array
//Author: Shubham Lodha
//Date: 05/08/2021

function Summation(Arr:number[]):number
{
    var Sum:number=0;
    for(var i=0;i<Arr.length;i++)
    {
       Sum=Sum+Arr[i];
    }
    return Sum;

}

var arr2:number[] = [23,6,7,4,5,7]; 
var ret:number=Summation(arr2);
console.log("Summation of all Number is",ret);
