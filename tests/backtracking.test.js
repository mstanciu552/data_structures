import {queens, perm} from "../ALGO/backtracking";

test("Backtracking behaviour", () => {
    (function queens_test() {
        const board4 = [
            [0, 0, 1, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 1],
            [0, 1, 0, 0],
        ];
        const board5 = [
            [1, 0, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 1, 0, 0],
        ];

        expect(queens()).toStrictEqual(board4);
        expect(queens(5)).toStrictEqual(board5);
    })();
    (function perm_test() {
        const perm3 = [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 2, 1],
            [3, 1, 2],
        ];
        const perm3_result = perm([1, 2, 3]);
        const perm4 = [
            [1, 2, 3, 4],
            [1, 2, 4, 3],
            [1, 3, 2, 4],
            [1, 3, 4, 2],
            [1, 4, 3, 2],
            [1, 4, 2, 3],
            [2, 1, 3, 4],
            [2, 1, 4, 3],
            [2, 3, 1, 4],
            [2, 3, 4, 1],
            [2, 4, 3, 1],
            [2, 4, 1, 3],
            [3, 2, 1, 4],
            [3, 2, 4, 1],
            [3, 1, 2, 4],
            [3, 1, 4, 2],
            [3, 4, 1, 2],
            [3, 4, 2, 1],
            [4, 2, 3, 1],
            [4, 2, 1, 3],
            [4, 3, 2, 1],
            [4, 3, 1, 2],
            [4, 1, 3, 2],
            [4, 1, 2, 3],
        ];
        const perm4_result = perm([1, 2, 3, 4]);

        // Initial length checking
        expect(perm3_result.length).toBe(6);
        expect(perm4_result.length).toBe(24);

        // Strict equality
        expect(perm3_result).toStrictEqual(perm3);
        expect(perm4_result).toStrictEqual(perm4);
    })();
});
