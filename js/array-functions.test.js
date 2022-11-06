import { arrayLength } from './array-functions';

describe('Given arrayLength function', () => {
    const arr = [
        [[3, 8, 5, 6], 4],
        [[], 0],
        [['1'], 1],
    ];
    test.each(arr)(`The result of %p should be %i`, (arr, expected) => {
        const result = arrayLength(arr);
        expect(result).toBe(expected);
    });
});