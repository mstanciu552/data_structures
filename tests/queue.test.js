import {Queue} from "../DS/queue";

test("Queue behavior", () => {
    const queue = new Queue();

    queue.add(1);
    queue.add(2);
    queue.add(3);
    queue.add(4);
    queue.add(5);
    queue.add(6);
    queue.add(7);

    expect(queue.getFirst()).toBe(1);
    expect(queue.getFirst()).toBe(2);
    expect(queue.getFirst()).toBe(3);
    expect(queue.getFirst()).toBe(4);
    expect(queue.getFirst()).toBe(5);
    expect(queue.getFirst()).toBe(6);
    expect(queue.getFirst()).toBe(7);
});
