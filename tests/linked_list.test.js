const { LinkedList } = require('../DS/linked_list.js');

test('Linked List data sctructure', () => {
    const list = new LinkedList(1);
    
    expect(list.getData()).toBe(1);
    
    list.setNext(2);
    expect(list.next.getData()).toBe(2);
    
    list.setNext(3);
    expect(list.next.getData()).toBe(3);
    
    list.setNext(4);
    expect(list.next.getData()).toBe(4);
    
    list.setNext(5);
    expect(list.next.getData()).toBe(5);
    
    list.setNext(6);
    expect(list.next.getData()).toBe(6);
    
    list.setNext(7);
    expect(list.next.getData()).toBe(7);
    
    list.setNext(8);
    expect(list.next.getData()).toBe(8);
    
    list.setNext(9);
    expect(list.next.getData()).toBe(9);
    
    list.setNext(10);
    expect(list.next.getData()).toBe(10);
});
