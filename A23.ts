//Second Maximum Number is 77

function SecondMax(Arr:number[]):number
{
    var max=Arr[0]
    var max2=Arr[0]
    for(var i=1;i<=Arr.length;i++)
    {
        if(Arr[i]>max)
        {
        max=Arr[i]
        }

        if((Arr[i]>max2)&&(Arr[i]<max))
        {
        max2=Arr[i]
        }
    }

    return max2
}

var Arr:number[]=[23,89,6,29,56,45,77,32]
var iRet:number=SecondMax(Arr)
console.log("Second Maximum Number is",iRet)