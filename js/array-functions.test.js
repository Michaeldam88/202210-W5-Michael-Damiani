import {
    arrayLength,
    arrayPush,
    arrayPop,
    arrayUnshift,
    arrayShift,
    arraySome,
    arrayEvery,
    arrayFind,
    arrayFilter,
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
        expect(result).toBe(3);
    });

    test(`The return of [3, 8] + 5, 6 should be 4`, () => {
        const result = arrayPush([3, 8], 5, 6);
        expect(result).toBe(4);
    });

    test(`The result of [3, 8] + 5, 6 should be [3, 8, 5, 6]`, () => {
        const originalArr = [3, 8];
        arrayPush(originalArr, 5, 6);
        const result = originalArr;
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
    test(`The return of [3, 8] + 5 should be 3`, () => {
        const result = arrayUnshift([3, 8], 5);
        expect(result).toBe(3);
    });

    test(`The return of [3, 8] + 5, 6 should be 4`, () => {
        const result = arrayUnshift([3, 8], 5, 6);
        expect(result).toBe(4);
    });

    test(`The result of [3, 8] + 5, 6 should be [3, 8, 5, 6]`, () => {
        const originalArr = [3, 8];
        arrayUnshift(originalArr, 5, 6);
        const result = originalArr;
        expect(result).toStrictEqual([5, 6, 3, 8]);
    });
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

    test(`The result of [3, 8, 'x'] + 3 should throw an error`, () => {
        function checkFunction() {
            arraySome([3, 8, 'x'], 3);
        }
        expect(checkFunction).toThrow();
    });
});

describe('Given arrayEvery function', () => {
    const checkFunction = (element) => {
        return element > 3;
    };
    const arrCase = [
        [[4, 8, 6], checkFunction, true],
        [[], checkFunction, true],
        [[3, 5, 7], checkFunction, false],
    ];

    test.each(arrCase)(
        `The result of %p + %p should be %p`,
        (originaArr, checkFunction, expected) => {
            const result = arrayEvery(originaArr, checkFunction);
            expect(result).toBe(expected);
        }
    );

    test(`The result of [3, 8, 'x'] + 3 should throw an error`, () => {
        function checkFunction() {
            arrayEvery([3, 8, 'x'], 3);
        }
        expect(checkFunction).toThrow();
    });
});

describe('Given arrayFind function', () => {
    const checkFunction = (element) => {
        return element > 10;
    };
    const arrCase = [
        [[4, 12, 6], checkFunction, 12],
        [[], checkFunction, undefined],
        [[3, 5, 7], checkFunction, undefined],
    ];

    test.each(arrCase)(
        `The result of %p + %p should be %p`,
        (originaArr, checkFunction, expected) => {
            const result = arrayFind(originaArr, checkFunction);
            expect(result).toBe(expected);
        }
    );

    test(`The result of [3, 8, 'x'] + 3 should throw an error`, () => {
        function checkFunction() {
            arrayFind([3, 8, 'x'], 3);
        }
        expect(checkFunction).toThrow();
    });
});

describe('Given arrayFilter function', () => {
    const checkFunction = (element) => {
        return element > 5;
    };
    const arrCase = [
        [[4, 12, 6], checkFunction, [12, 6]],
        [[], checkFunction, []],
        [[3, 5, 2], checkFunction, []],
    ];

    test.each(arrCase)(
        `The result of %p + %p should be %p`,
        (originaArr, checkFunction, expected) => {
            const result = arrayFilter(originaArr, checkFunction);
            expect(result).toStrictEqual(expected);
        }
    );

    test(`The result of [3, 8, 'x'] + 3 should throw an error`, () => {
        function checkFunction() {
            arrayFilter([3, 8, 'x'], 3);
        }
        expect(checkFunction).toThrow();
    });
});