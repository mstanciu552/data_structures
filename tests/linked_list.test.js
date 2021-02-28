const { LinkedList } = require('../DS/linked_list.js');



test('Linked List data sctructure', () => {
    function test_ll(ll) { 
        if (ll) {
            expect(ll.data).toBe(1);
            expect(ll.next.data).toBe(2);
            expect(ll.next.next.data).toBe(3);
            expect(ll.next.next.next.data).toBe(4);
            expect(ll.next.next.next.next.data).toBe(5);
        }
    }
    
    let ll = LinkedList.convertArray([1, 2, 3, 4, 5]);
    test_ll(ll);

    ll2 = new LinkedList(1);
    ll2.setNext(2);
    ll2.setNext(3);
    ll2.setNext(4);
    ll2.setNext(5);
    
    test_ll(ll2);

});

const { reverse_ll, get_nth, delete_first, delete_nth_end, get_middle } = require('../ALGO/linked_list.js');

test('Linked List algorithms', () => {
    let ll = LinkedList.convertArray([1, 2, 3, 4, 5]);
    let ll_arr = ll.getArray();
    let reversed_ll = reverse_ll(ll);
    let nth_from_ll = get_nth(ll, 2);
    let deleted_first = delete_first(ll); 
    let deleted_nth = delete_nth_end(ll, 2);
    let middle = get_middle(ll);

    console.log(ll_arr.reverse())

    expect(reversed_ll.getArray()).toEqual(ll_arr.reverse());
    expect(nth_from_ll).toStrictEqual(3);
    expect(deleted_first.getArray()).toStrictEqual(ll_arr.slice(1));
    expect(deleted_nth.getArray()).toStrictEqual([1, 2, 4, 5]);
    expect (middle).toBe(3);
});
