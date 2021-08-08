//Function Name :Addition,Substraction
//Input: 100 20

//Output:
//Addition is 120
//Substraction is 80

//Description: Program to Perform Addition and Substraction of Number using Procedure Oriented 
//Author: Shubham Lodha
//Date: 08/08/2021

main()

function Addition(no1:number,no2:number):number
{
    console.log("Inside Addition Function")
    var ans=0
    ans=no1+no2
    return ans
}

function Substraction(no1:number,no2:number):number
{
    console.log("Inside Substraction Function")
    var ans=0
    ans=no1-no2
    return ans
}


function main()
{
    console.log("Inside Main");
    var no1:number=11
    var no2:number=21
    var ret:number=Addition(no1,no2)
    console.log("Addition is",ret)
    var ret=Substraction(no1,no2)
    console.log("Substraction is",ret)
}