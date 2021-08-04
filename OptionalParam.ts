//Function Name :Area
//Input: --
/*Output:
Area is : 314
Area is : 720
*/
//Description: Implementations of optionalParam
//Author: Shubham Lodha
//Date: 04/08/2021

function Area(radious:number,PI?:number):number 
{ 
    var area:number;

    // Check whether second parameter is provided or not.
    if(PI == undefined)
    {
        PI = 3.14;
    }
    area = radious*radious*PI;

    return area; 
 }

 var iret:number;
 iret = Area(10.0);
 console.log("Area is : "+iret);

 iret = Area(10.0,7.2);
 console.log("Area is : "+iret);