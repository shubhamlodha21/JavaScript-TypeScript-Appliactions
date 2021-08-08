//Function Name :Main
//Description: Main Functions That Imports Server
//Author: Shubham Lodha
//Date: 08/08/2021


import {Addition,Substraction} from "./Server"
main()
function main()
{
    var no1=11
    var no2=21
    var ret=0
    ret=Addition(no1,no2)
    console.log("Addition is:",ret);
    ret=Substraction(no1,no2)
    console.log("Substraction is:",ret);
}