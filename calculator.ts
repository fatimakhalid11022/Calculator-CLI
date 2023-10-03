import inquirer from "inquirer";
import {sum} from "./function.js";
import {sub} from "./function2.js";
import {mul} from "./function3.js";
import {div} from "./function4.js";
import showBanner from "node-banner";
import { TIMEOUT } from "dns";
import gradient from "gradient-string"



let answers = [
    {name : "num1",
    type :"number",
    message :"Enter First Number:",
    validate : (input:number)=>{
        if(isNaN(input)){
        return "Enter number!"
    }
    return true;}
},
 
    {name : "num2",
    type :"number",
    message :"Enter Second Number:"  ,
    
    validate : (input:number)=>{
        if(isNaN(input)){
        return "Enter number!"
    }
      return true;}
},
 
    {name : "operation",
    type :"list",
    choices : ["add","sub","mul","div"],
    message :("Enter your Operation:")}
 ];


 let answer= [
    {
        name: "again",
        type:"confirm",
        message :"Do you want to calculate again?"
    }
 ];



(async ()=>{
    await showBanner('Calculator','This calculator can perform Addition ,Subtraction,Multiplication and Division'
    ,"yellow","green")
})();



async function calculator(){
    let condition=true;
    while(condition){

 let  {num1,num2,operation} = await inquirer.prompt(answers);
 if(operation === "add"){
 console.log(gradient.rainbow("The Addition of two numbers are"),sum(num1,num2))}
 else if(operation === "sub"){
 console.log(gradient.rainbow("The Subtraction of two numbers are"),sub(num1,num2))}
 else if(operation === "mul"){
 console.log(gradient.rainbow("The multiplication of two numbers are"),mul(num1,num2))}
 else{
 console.log(gradient.rainbow("The Division of two numbers are"),div(num1,num2))};
    let {again} = await inquirer.prompt(answer);
     condition=again;

}}



setTimeout(()=>{

calculator();
}, 1000);




