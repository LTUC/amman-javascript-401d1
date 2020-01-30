'use strict';

class Queue {
    constructor(){
        this.storage = new Array();
        this.front = null;
        this.rear = null;
    }

    enqueue(item){
        this.storage.push(item);
        if(this.storage.length == 1){
            this.front = item;
            this.rear = item;
        }
        else{
            this.rear = item;
        }
    }

    dequeue(){
        if(!this.storage.length){
            return null;
        }

        let item = this.storage.shift();
        if(this.storage.length == 0){
            this.front = this.rear = null;
        }
        else{
            this.front = this.storage[0];
            this.rear = this.storage[this.storage.length-1];
        }
        

        // if(this.storage.length == 1)
        // {
        //     this.front = this.storage[0];
        //     this.rear = this.storage[0];
        // }
        // else{
        //     this.front = this.storage[0];
        //     this.rear = this.storage[length-1];
        // }
        return item;
    }
}

module.exports = Queue;