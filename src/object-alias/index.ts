// let obj1:{name:string,age:number}={
//     name:"Ankit",
//     age:24
// }

// let obj2:{name:string,age:number}={
//     name:"Ashutosh",
//     age:24
// }

// if the data type is same then we can create a alias for general purpose and use the same name
// as a type wherever required

type aliass={name:string,age:number}

let obj2:aliass={
    name:"Ankit",
    age:24
}

let obj1:aliass={
    name:"Ashutosh",
    age:24
}