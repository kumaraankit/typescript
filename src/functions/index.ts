function add(a:number,b:number):number{
    return a+b
}

console.log(add(2,3))


// If a function does not return any value then we can annotate using a special data type called void
function log(message:string):void{
    console.log(message)
}

// Creating alias

type Add=(a:number,b:number)=>number

let addition:Add

addition=function(a:number,b:number):number{
    return a+b
}