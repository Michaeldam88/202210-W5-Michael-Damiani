export const arrayLength = (arr) => {
    let length = 0;
    while (
        arr[length] !== undefined ||
        (arr[length] === undefined && arr[length + 1] !== undefined)
    ) {
        length++;
    }
    return length;
};

export const arrayPush = (originalArr, ...newElement) => {
    for (let i = 0; i < arrayLength(newElement); i++) {
        originalArr[arrayLength(originalArr)] = newElement[i];
    }

    return arrayLength(originalArr);
};

export const arrayPop = (arr) => {
    const newArr = [];
    if (arrayLength(arr) < 1) return undefined;
    for (let i = 0; i < arrayLength(arr) - 1; i++) {
        arrayPush(newArr, arr[i]);
    }
    return newArr;
};

export const arrayUnshift = (originalArr, ...newElement) => {
    for (let i = arrayLength(originalArr) - 1; i >= 0; i--) {
        originalArr[i + arrayLength(newElement)] = originalArr[i];
    }
    for (let i = 0; i < arrayLength(newElement); i++) {
        originalArr[i] = newElement[i];
    }

    return arrayLength(originalArr);
};

export const arrayShift = (arr) => {
    const newArr = [];
    if (arrayLength(arr) < 1) return undefined;
    for (let i = 1; i < arrayLength(arr); i++) {
        arrayPush(newArr, arr[i]);
    }
    return newArr;
};

export const arraySome = (arr, functionToCheck) => {
    if (arrayLength(arr) < 1) return false;
    if (typeof functionToCheck !== 'function') {
        throw new Error(`ERROR: ${functionToCheck} is not a function`);
    }

    for (let i = 0; i < arrayLength(arr); i++) {
        if (functionToCheck(arr[i])) return true;
    }
    return false;
};

export const arrayEvery = (arr, functionToCheck) => {
    if (arrayLength(arr) < 1) return true;
    if (typeof functionToCheck !== 'function') {
        throw new Error(`ERROR: ${functionToCheck} is not a function`);
    }

    for (let i = 0; i < arrayLength(arr); i++) {
        if (!functionToCheck(arr[i])) return false;
    }
    return true;
};

export const arrayFind = (arr, functionToCheck) => {
    if (typeof functionToCheck !== 'function') {
        throw new Error(`ERROR: ${functionToCheck} is not a function`);
    }

    for (let i = 0; i < arrayLength(arr); i++) {
        if (functionToCheck(arr[i])) return arr[i];
    }
    return undefined;
};

export const arrayFilter = (arr, functionToCheck) => {
    if (typeof functionToCheck !== 'function') {
        throw new Error(`ERROR: ${functionToCheck} is not a function`);
    }

    const resultArr = [];

    for (let i = 0; i < arrayLength(arr); i++) {
        if (functionToCheck(arr[i])) {
            arrayPush(resultArr, arr[i]);
        }
    }
    return resultArr;
};

export const arrayMap = (arr, functionToCheck) => {
    if (typeof functionToCheck !== 'function') {
        throw new Error(`ERROR: ${functionToCheck} is not a function`);
    }

    const resultArr = [];

    for (let i = 0; i < arrayLength(arr); i++) {
        arrayPush(resultArr, functionToCheck(arr[i]));
    }
    return resultArr;
};

export const arrayFindIndex = (arr, functionToCheck) => {
    if (typeof functionToCheck !== 'function') {
        throw new Error(`ERROR: ${functionToCheck} is not a function`);
    }

    for (let i = 0; i < arrayLength(arr); i++) {
        if (functionToCheck(arr[i])) return i;
    }
    return -1;
};

export const arrayIncludes = (arr, valueToCheck) => {
    for (let i = 0; i < arrayLength(arr); i++) {
        if (arr[i] === valueToCheck) return true;
    }
    return false;
};

export const arrayIndexOf = (arr, valueToCheck) => {
    for (let i = 0; i < arrayLength(arr); i++) {
        if (arr[i] === valueToCheck) return i;
    }
    return -1;
};

export const arrayReduce = (arr, functionToExecute, initialValue) => {
    if (typeof functionToExecute !== 'function') {
        throw new Error(`ERROR: ${functionToExecute} is not a function`);
    }
    let accumulator = initialValue;
    for (let i = 0; i < arrayLength(arr); i++) {
        accumulator = functionToExecute(accumulator, arr[i]);
    }
    return accumulator;
};

export const arrayJoin = (arr, separator) => {
    let stringResult = '';
    if (separator === '') separator = ',';
    for (let i = 0; i < arrayLength(arr); i++) {
        if (i === arrayLength(arr) - 1) stringResult += arr[i];
        else {
            stringResult += arr[i] + separator;
        }
    }
    return stringResult;
};