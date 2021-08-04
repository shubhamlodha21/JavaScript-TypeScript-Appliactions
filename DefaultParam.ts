//Function Name :Percentage
//Input: --
/*Output:
83.33333333333334
50
*/
//Description: Implementations of DefaultParam
//Author: Shubham Lodha
//Date: 04/08/2021

function percentage(marks:number,outof:number = 300) 
{ 
   var per = (marks/outof) * 100; 
   return per; 
} 

var iret:number;

iret = percentage(250); 
console.log(iret);

iret = percentage(250,500); 
console.log(iret);