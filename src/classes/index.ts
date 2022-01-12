class Animal{
     name:string

    // private
    //protected
    
constructor(name:string){
    this.name=name;
}

public move(x:number):void{
 console.log(` i have number ${x}`)
}
}

let cat=new Animal('cat')
cat.move(10)
cat.name="yyyy"

class newAnimal extends Animal{
  newMethod(y:number):void{
      console.log(`newMethod ${this.name} and ${y}`)

  }
}
