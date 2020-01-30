'use strict';

class Stack{
    constructor(){
        this.storage = new Array();
        this.top = null;
    }

    push(item){
        this.storage.push(item);
        this.top = item;
    }

    pop(){
        let item = this.storage.pop();
        // this.top = this.storage[this.storage.length-1];
        this.top = !this.storage.length ? null : this.storage[this.storage.length-1];
        return item;
    }

    peek(){
        return this.top;
    }
}

module.exports = Stack;