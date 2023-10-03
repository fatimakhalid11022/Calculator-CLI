//any

// let myvalu : any;
// let myname :string;
// // myname ="str";
// // myname =12;

// let myval : any;  //ok
//  myval  = true;  //ok
//  myval = 42;  //ok
//  myval = "hey";   //ok
//  myval = [];   //ok
//  myval = {};   //ok
//  myval = Math.random;    //ok
//  myval = null;    //ok
//  myval = undefined;   //ok
//  myval = ()=>{console.log("hey again!");}     //ok


//unknown



//ALL OKAY

//assigning a value of type unknown to variables of other types

// let val : any;   //unknown
// //why unknown : agr koi value ka data type hmy pta na ho
// //limited possibilities
// //ta k typescript functional na ho

// const val1: unknown = val;//ok
// const val2: any = val;//ok

// const val3 :boolean = val;  //will throw error;
// const val4 :number = val;  //will throw error
// const val5 :string = val;  //will throw error
// const val6 :Record<string,any> = val;  //will throw error
// const val7 :any[] = val;  //will throw error
// const val8 :(...args:any[]) => void = val;  //will throw error

// //void: no return  type return is void

// //never    used with function to throw error
// //function returning never must not have a reachable end point
// function error (message:string):never {
//     throw new Error(message);
//     //return
// }

// //inferred return type is never
// function fail (){
//     return error ("something failed")
// }

// //function returning never must not have areachable end point
// function infiniteLoop():never{
//     while (true){}
// }
