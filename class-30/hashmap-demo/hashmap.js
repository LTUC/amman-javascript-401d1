'use strict';

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
    }

    read(){
        /* 
        - Displays the content of all items in the Linked List
        */
        if(!this.head) console.log("The list is empty");
        else {
            let current = this.head;
            while(current){
                console.log(current.data);
                current = current.next;
            }
        }
    }
}


class Hashmap{
    constructor(size){
        this.size = size;
        this.map = new Array(size);
    }

    hash(key){
        /*
        - Generates a hash for any key
        - hash value will be between 0 and size-1
        */

        return  key.split('').reduce((acc, val, i) => {
            return acc + val.charCodeAt(0);
        }, 0) * 19 % this.size;
    }

    set(key, value){
        /* 
        - Sets a key-value pair
        - Solves the collision problem
        */

        let hashedKey = this.hash(key);
        if(!this.map[hashedKey]){
           let ll =  new LinkedList();
           ll.add([key,value]);
           this.map[hashedKey] = ll;
        }
        else{
            this.map[hashedKey].add([key,value]);
        }
    }

    get(key){
        /* 
        - TODO
        - Returns the value at that key
        */
    }
}


// Let's create a hashmap and check
let hashmap = new Hashmap(1024);

hashmap.set('name', 'ahmad');
hashmap.set('listen', true);
hashmap.set('silent', 'ayman'); // This will cause a collision
hashmap.set('abu aseel', 0);

hashmap.map.forEach( (data, i) => {
    console.log(i);
    data.read();
})