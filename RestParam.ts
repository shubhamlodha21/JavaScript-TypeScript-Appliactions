//Function Name :ArrowFunctions
//Input: --
/*Output:Number of arguments are : 3
1
2
3
Number of arguments are : 4
11
21
51
101

*/
//Description: Implementations of RestParam
//Author: Shubham Lodha
//Date: 04/08/2021

function Display(...arr:number[]) 
{  
    var i;   
    console.log("Number of arguments are : "+arr.length);
     
    for(i = 0; i<arr.length; i++) 
    { 
       console.log(arr[i]); 
    }  
 } 

 Display(1,2,3);
 Display(11,21,51,101);