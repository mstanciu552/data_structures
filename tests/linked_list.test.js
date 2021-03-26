import {LinkedList} from "../DS/linked_list.js";

test("Linked List data sctructure", () => {
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

import {
    reverse_ll,
    get_nth,
    delete_first,
    delete_nth_end,
    get_middle,
} from "../ALGO/linked_list.js";

test("Linked List algorithms", () => {
    let ll = LinkedList.convertArray([1, 2, 3, 4, 5]);
    let ll_arr = ll.getArray();
    let ll_arr_rev = ll_arr.reverse();
    let reversed_ll = reverse_ll(ll);
    let nth_from_ll = get_nth(LinkedList.convertArray([1, 2, 3, 4, 5]), 2);
    let deleted_first = delete_first(LinkedList.convertArray([1, 2, 3, 4, 5]));
    let deleted_nth = delete_nth_end(LinkedList.convertArray([1, 2, 3, 4, 5]), 2);
    let middle = get_middle(LinkedList.convertArray([1, 2, 3, 4, 5]));

    expect(reversed_ll.getArray()).toEqual(ll_arr_rev);
    expect(nth_from_ll).toStrictEqual(3);
    expect(deleted_first.getArray()).toStrictEqual([2, 3, 4, 5]);
    expect(deleted_nth.getArray()).toStrictEqual([1, 2, 3, 5]);
    expect(middle).toBe(3);
});
