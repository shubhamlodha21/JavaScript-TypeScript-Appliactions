////////////////////////////////////////////////
//Function Name: Sequence,Iteration,Comapare
//Input: --
//Output: --
//Description: Uses of All loops in Typescript
//Date: 21/08/2021
//Author: Shubham Lodha
////////////////////////////////////////////////

function Sequence()
{
    console.log("Demostration of Sequences");
    var arr:number[]=[10,20,30,40]
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
}

function Iteration1():number
{
    console.log("Demostration of Iterations-1");
    var arr:number[]=[10,20,30,40];
    var iCnt:number=0;
    var iSum:number=0;

    iSum=iSum+arr[0];
    iSum=iSum+arr[1];
    iSum=iSum+arr[2];
    iSum=iSum+arr[3];

    return iSum;
}

function Iteration2():number
{
    console.log("Demostration of Iterations-2");
    var arr:number[]=[10,20,30,40];
    var iCnt:number=0;
    var iSum:number=0;

    for(iCnt=0;iCnt<arr.length;iCnt++)//General For loop
    {
        iSum=iSum+arr[iCnt];
    }
    
    return iSum;
}

function Iteration3():number
{
    console.log("Demostration of Iterations-3");
    var arr:number[]=[10,20,30,40];
    var iCnt:number=0;
    var iSum:number=0;

    for(iCnt of arr)//For Each loop(of Keyword)
    {
        iSum=iSum+iCnt;
    }
    return iSum;

}

function Iteration4():number
{
    console.log("Demostration of Iterations-4");
    var arr:number[]=[10,20,30,40];
    //var iCnt:number=0;
    var iSum:number=0;

    for(var iIndex in arr)//For Each loop using Index(in Keyword) loop
    {
        iSum=iSum+arr[iIndex];
    }
    return iSum;
}

function Iteration5():number
{
    console.log("Demonstration of Iteration-5");
    var arr:number[]=[10,20,30,40];
    var iCnt:number=0;
    var iSum:number=0;

    while(iCnt<arr.length)
    {
        iSum=iSum+arr[iCnt];
        iCnt++;
    }
    return iSum;
}

function Iteration6():number
{
    {
        console.log("Demonstration of Iteration-6");
        var arr:number[]=[10,20,30,40];
        var iCnt:number=0;
        var iSum:number=0;
    
        do
        {
            iSum=iSum+arr[iCnt];
            iCnt++;
        }
        while(iCnt<arr.length);

        return iSum;
    }
    
}

function Comapare(iNo1:number,iNo2:number)
{
    if(iNo1<iNo2)
    {
        console.log("First is less then Second");
    }

    else if(iNo1==iNo2)
    {
        console.log("First is Equals to Second");
    }

    else
    {
        console.log("First is greater then Second");
    }
}

function MyDate(iNo:number)
{
    if(iNo==1)
    {
        console.log("Monday");
    }
    else if(iNo==2)
    {
        console.log("Tuesday");
    }
    else if(iNo==3)
    {
        console.log("Wednesday");
    }
    else if(iNo==4)
    {
        console.log("Thursday");
    }
    else if(iNo==5)
    {
        console.log("Friday");
    }
    else if(iNo==6)
    {
        console.log("Saturday");
    }
    else if(iNo==7)
    {
        console.log("Sunday");
    }
    else
    {
        console.log("Wrong Input");
    }
}

function MyDate2(iNo:number)
{
    switch(iNo)
    {
        case 1:
            console.log("Monday");
            break;
         
        case 2:
             console.log("Tuesday");
             break; 
        
        case 3:
            console.log("Wednesday");
            break;
            
        case 4:
             console.log("Thursday");
             break;
             
        case 5:
            console.log("Friday");
            break;
            
        case 6:
            console.log("Saturday");
            break;
            
        case 7:
            console.log("Sunday");
            break;
            
        default:
            console.log("Wrong input");
            break;    
    }
}



Sequence();

var iRet=Iteration1();
console.log("Addition is",iRet);

var iRet=Iteration2();
console.log("Addition is",iRet);

var iRet=Iteration3();
console.log("Addition is",iRet);

var iRet=Iteration4();
console.log("Addition is",iRet);

var iRet=Iteration5();
console.log("Addition is",iRet);

var iRet=Iteration6();
console.log("Addition is",iRet);

Comapare(10,200);
MyDate(5);
MyDate2(3);
