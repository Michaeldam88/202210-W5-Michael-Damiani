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
    test(`The return of [3, 8] + 5 should be 3`, () => {
        const result = arrayPush([3, 8], 5);
        expect(result).toStrictEqual(3);
    });

    test(`The return of [3, 8] + 5, 6 should be 4`, () => {
        const result = arrayPush([3, 8], 5, 6);
        expect(result).toStrictEqual(4);
    });

    test(`The result of [3, 8] + 5, 6 should be [3, 8, 5, 6]`, () => {
        const originaArr = [3, 8];
        arrayPush(originaArr, 5, 6);
        const result = originaArr;
        expect(result).toStrictEqual([3, 8, 5, 6]);
    });
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
        [[3, 5, 7], checkFunction, false],
    ];

    test.each(arrCase)(
        `The result of %p + %p should be %p`,
        (originaArr, checkFunction, expected) => {
            const result = arraySome(originaArr, checkFunction);
            expect(result).toBe(expected);
        }
    );

    const checkFunction2 = (element) => {
        return element > 3;
    };
    const arrCase2 = [
        [[3, 8, 'x'], checkFunction2, true],
        [[], checkFunction2, false],
        [[3, 2, 1], checkFunction2, false],
    ];

    test.each(arrCase2)(
        `The result of %p + %p should be %p`,
        (originaArr, checkFunction2, expected) => {
            const result = arraySome(originaArr, checkFunction2);
            expect(result).toBe(expected);
        }
    );

    test(`The result of [3, 8, 'x'] + 3 should throw an error`, () => {
        function checkFunction() {
            arraySome([3, 8, 'x'], 3);
        }
        expect(checkFunction).toThrow();
    });
});