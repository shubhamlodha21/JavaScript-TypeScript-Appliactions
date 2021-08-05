//Function Name :Maximum
//Input:--
//Output:Maximum Number is: 89
//Description:Display Maximum Number of an Array
//Author: Shubham Lodha
//Date: 05/08/2021

function Maximum(Arr:number[]):number
{
    var max=Arr[0]
    for(var i=0;i<Arr.length;i++)
    {
        if(Arr[i]>max)
        {
            max=Arr[i]
        }
    }
    return max
}

var arr2:number[]=[23,89,6,29,56,45,77,32]
var ret:number=Maximum(arr2)
console.log("Maximum Number is:",ret)

