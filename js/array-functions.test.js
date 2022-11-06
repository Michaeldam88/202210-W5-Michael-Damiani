import { arrayLength, arrayPush, arrayPop } from './array-functions';

describe('Given arrayLength function', () => {
    const arrCase = [
        [[3, 8, 5, 6], 4],
        [[], 0],
        [['1'], 1],
        [[2, undefined, 3], 3],
        [[null], 1],
        [[NaN], 1],
        [[{}], 1],
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

describe('Given arrayPop function', () => {
    const arrCase = [
        [
            [3, 8, 5, 6],
            [3, 8, 5],
        ],
        [[], undefined],
        [['1'], undefined],
    ];
    test.each(arrCase)(`The result of %p should be %p`, (arr, expected) => {
        const result = arrayPop(arr);
        expect(result).toStrictEqual(expected);
    });
});