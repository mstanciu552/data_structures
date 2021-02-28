const { LinkedList } = require('../DS/linked_list.js');


function reverse_ll(ll) {
    if (ll) {
        let prev = null, curr = ll, next = null;

        while(curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}

// * Indexing starts at 0
function get_nth(ll, n) {
    while(ll) {
        if (n === 0) return ll.data;
        n--;
        ll = ll.next;
    }
}

// console.log(get_nth(LinkedList.convertArray([1, 2, 3, 4, 5]), 2))

function delete_first(ll) {
    if (ll) {
        ll = ll.next;
        return ll;

    }
}

function delete_nth_end(ll, n) {
    if (ll) {
        let dummy = new LinkedList(0);
        dummy.next = ll;
        let length = 0;
        let first = ll;
        while(first) {
            length ++;
            first = first.next;
        }
        length -= n;
        let i = 0;
        first = dummy;
        while(length > 0) {
            length --;
            first = first.next;
        }

        first.next = first.next.next;
        return dummy.next;
    }
}

function get_middle(ll) {
    if (ll) {
        let slow = ll, fast = ll;
        while(fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }
}

module.exports = {
    reverse_ll,
    get_middle,
    delete_nth_end,
    delete_first,
    get_nth
};
