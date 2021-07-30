//Function Name :chkPrime
//Input:  21
//Output: 21 is not prime not number
//Description: Program to Check guven number is prime or not
//Author: Shubham Lodha
//Date: 31/07/2021



function chkPrime(no:number):boolean
{
    for(var i=2;i<no;i++)
    {
        if(no%i==0)
        {
            return true;
        }
    }

    return false;
}

var no:number=21;
var bret:boolean=chkPrime(no)
if (bret==true)
{
    console.log(no,"is Not Prime Number");
}
else
{
    console.log(no,"is Prime Number");
}