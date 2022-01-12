// generic data type is used to interact or performthe specific type to minimise error.

class QueueOperation<T>{
    data=[]
    push(item:T){this.data.push(item);}
    pop():T{
        return this.data.shift();
    }
}

const queue=new QueueOperation<number>();
queue.push(123)
queue.push(134)


console.log(queue.pop().toPrecision(1))
console.log(queue.pop().toPrecision(1));
