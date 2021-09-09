////////////////////////////////////////////////////////
//Function Name:AmountServer
//Description:Server Rounting by using nodejs
//Date: 09/09/2021
//Author: Shubham Lodha
///////////////////////////////////////////////////////

express = require("express");

obj=express();

obj.listen(5100,function(){
    console.log("Server is Started..!");
});//Open server with port number 5100(Hosting a server)

obj.get('/',function(req,res){
    res.send("Inside the Server...!");
});//Someone is connected to the server


function AmountDeposit(Amount)
{
    Balance =1000;
    Balance=Balance+ Number (Amount);
    return Balance;
}

obj.get('/Deposit',function(req,res){
    value=req.query.Amount;
    ret=AmountDeposit(value);
    res.send("Inside the Deposite"+Balance);
});//Routing the deposite

obj.get('/Withdraw',function(req,res){
    res.send("Inside the withdraw");
});//Routing the withdraw


//to access server http://localhost:5100( Request send by Client)

//to access Routing function http://localhost:5100/Withdraw

//to access Routing function http://localhost:5100/Deposite?Amount=1000 
