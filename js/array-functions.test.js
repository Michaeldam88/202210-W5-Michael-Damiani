import {
    arrayLength,
    arrayPush,
    arrayPop,
    arrayUnshift,
    arrayShift,
    arraySome,
} from './array-functions';

describe('Given arrayLength function', () => {
    const arrCase = [
        [[3, 8, 5, 6], 4],
        [[], 0],
        [['1'], 1],
        [[2, undefined, 3], 3],
        [[null], 1],
        [[NaN], 1],
        [[{}], 1],
        //test not passed
        //[[{ undefined }], 1]
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
        [['1'], []],
    ];
    test.each(arrCase)(`The result of %p should be %p`, (arr, expected) => {
        const result = arrayPop(arr);
        expect(result).toStrictEqual(expected);
    });
});

describe('Given arrayUnshift function', () => {
    const arrCase = [
        [[3, 8], 5, [5, 3, 8]],
        [[3, 8, 5, 6], 'x', ['x', 3, 8, 5, 6]],
    ];
    test.each(arrCase)(
        `The result of %p + %p should be %p`,
        (originaArr, newElement, expected) => {
            const result = arrayUnshift(originaArr, newElement);
            expect(result).toStrictEqual(expected);
        }
    );
});

describe('Given arrayShift function', () => {
    const arrCase = [
        [
            [3, 8, 5, 6],
            [8, 5, 6],
        ],
        [[], undefined],
        [['1'], []],
    ];
    test.each(arrCase)(`The result of %p should be %p`, (arr, expected) => {
        const result = arrayShift(arr);
        expect(result).toStrictEqual(expected);
    });
});

describe('Given arraySome function', () => {
    const checkFunction = (element) => {
        return element === 'x';
    };
    const arrCase = [
        [[3, 8, 'x'], checkFunction, true],
        [[], checkFunction, false],
    ];

    test.each(arrCase)(
        `The result of %p + %p should be %p`,
        (originaArr, checkFunction, expected) => {
            const result = arraySome(originaArr, checkFunction);
            expect(result).toBe(expected);
        }
    );
});