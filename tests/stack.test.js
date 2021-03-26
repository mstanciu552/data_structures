import {Stack} from '../DS/stack.js';

test('Stack representation', () => {
    const stack = new Stack();

    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)

    expect(stack.getLast()).toBe(5)
    stack.pop();

    expect(stack.getLast()).toBe(4)
    stack.pop();

    expect(stack.getLast()).toBe(3)
    stack.pop();

    expect(stack.getLast()).toBe(2)
    stack.pop();

    expect(stack.getLast()).toBe(1)
    stack.pop();
})
