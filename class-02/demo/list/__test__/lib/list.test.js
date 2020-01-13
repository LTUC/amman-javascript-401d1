const List = require('../../lib/list.js');

describe('List', () => {

  let testArray = ['A1', 'A2', 'A3'];
  let loadList = () => {
    let thisList = new List();
    for( let i = 0; i <= testArray.length - 1; i++ ) {
      thisList.push(testArray[i]);
    }
    return thisList;
  };

  it('push() keeps the list the same if no element is pushed', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
    myList.push();
    expect( myList.length ).toEqual(3);
  });

  it('push() increments the .length property', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
  });

  it('push() adds an element to the list', () => {
    let myList = loadList();
    myList.push('FOO');
    expect( myList.data[myList.length - 1] ).toEqual('FOO');
  });

  it('pop() undefined on an empty list', () => {
    let myList = new List();
    expect( myList.pop() ).toBeUndefined();
  });

  it('pop() returns the last item', () => {
    let myList = loadList();
    expect( myList.pop() ).toEqual(testArray[2]);
  });

  it('pop() decrements .length property by 1', () => {
    let myList = loadList();
    myList.pop();
    expect( myList.length ).toEqual(2);
  });

  it('unshift() increments the .length property', () => {
    let myList = loadList();
    myList.unshift('foobar');
    expect( myList.length ).toEqual(4);
  });

  it('unshift() adds an element to the front of list', () => {
    let myList = loadList();
    myList.unshift('FOO');
    expect( myList.data[0] ).toEqual('FOO');
  });

  it('shift() returns the first item', () => {
    let myList = loadList();
    expect( myList.shift() ).toEqual(testArray[0]);
  });

  it('shift() decrements .length property by 1', () => {
    let myList = loadList();
    myList.shift();
    expect( myList.length ).toEqual(2);
  });

  it('forEach() does not run if there is nothing in the list', () => {
    let myList = new List();
    let iterations = 0;
    myList.forEach( item => {
      iterations++;
    });
    expect(iterations).toEqual(0);
  });

  it('forEach() runs a callback for each item in the list', () => {
    let myList = loadList();
    let iterations = 0;
    myList.forEach( item => {
      iterations++;
    });
    expect(iterations).toEqual(myList.length);
  });

  it('map() returns undefined if the list is empty', () => {
    let myList = new List();
    expect( myList.map(v => v > 1) ).toBeUndefined();
  });

  it('map() returns a new list', () => {

    let myList = loadList();
    let newList = myList.map( (val,i) => {
      return `${i} -- ${val}`;
    });

    expect( newList.length ).toEqual(myList.length);
    expect( newList.data[0] ).toEqual( `0 -- ${testArray[0]}` );

  });

  it('filter() returns undefined if the list is empty', () => {
    let myList = new List();
    expect( myList.filter(v => v > 1) ).toBeUndefined();
  });

  it('filter() returns a new filtered list', () => {

    let myList = loadList();
    let newList = myList.filter( (val) => {
      return val === testArray[0];
    });

    expect( newList.length ).toEqual(1);
    expect( newList.data[0] ).toEqual( testArray[0] );

  });

  it('reduce() returns undefined if the list is empty', () => {
    let myList = new List();
    expect( myList.reduce() ).toBeUndefined();
  });

  it('reduce() reduces the list with a callback', () => {
    let myList = loadList();
    let newList = myList.reduce( (state,val,idx) => {
      state.push(val);
      return state;
    },[]);
    expect(newList.length).toEqual(myList.length);
  });

});
