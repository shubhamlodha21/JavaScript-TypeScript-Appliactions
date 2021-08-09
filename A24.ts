
function ChkArmStrong(no:number):boolean
{
    var i:number=0
    var num:number=no
    var iDigit:number=0;
    var num2:number=no
    var sum:number=0;
    while(num!=0)
    {
        num=(num/10);
        i=i+1;
        num=Math.floor(num);
    }
    
    if(i==1)
    {
        return true
    }

    while(num2!=0)
    {
        iDigit=Math.floor(num2%10);
        var iMulti:number=1;
        for(var j=1;j<=i;j++)
        {
        iMulti=iMulti*iDigit;
        }
        sum=sum+iMulti;
        num2=Math.floor(num2/10);
    }

    if(no==sum)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var no:number=153;
var ret=ChkArmStrong(no);
if(ret==true)
{
    console.log(no,"is ArmStrong Number")
}
else
{
    console.log(no,"is not an ArmStrong Number")
}