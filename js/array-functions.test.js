import { arrayLength, arrayPush } from './array-functions';

describe('Given arrayLength function', () => {
    const arrCase = [
        [[3, 8, 5, 6], 4],
        [[], 0],
        [['1'], 1],
    ];
    test.each(arrCase)(`The result of %p should be %i`, (arr, expected) => {
        const result = arrayLength(arr);
        expect(result).toBe(expected);
    });
});

describe('Given arrayPush function', () => {
    const arrCase = [
        [[3, 8], 5, [3, 8, 5]],
        [[3, 8, 5], 6, [3, 8, 5, 6]],
        [[3, 8, 5, 6], 'x', [3, 8, 5, 6, 'x']],
    ];
    test.each(arrCase)(
        `The result of %p + %p should be %p`,
        (originaArr, newElement, expected) => {
            const result = arrayPush(originaArr, newElement);
            expect(result).toStrictEqual(expected);
        }
    );
});
