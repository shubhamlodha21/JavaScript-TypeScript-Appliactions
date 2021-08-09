
function Search(str:string):boolean
{
    var src:string="Marvellous";
    if (str.search(src) == -1 ) 
    { 
        return false;
    } 
    else 
    { 
        return true;
    }
}

var ret:boolean
var str:string="Pune Kothrud Marvellous Infosystem";
ret==Search(str);
if(ret==false)
    { 
    console.log("Does not contain Marvellous" ); 
    } 
    else 
    { 
    console.log("Contains Marvellous" ); 
    }
