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

export const arrayPush = (originaArr, ...newElement) => {
    for (let i = 0; i < arrayLength(newElement); i++) {
        originaArr[arrayLength(originaArr)] = newElement[i];
    }

    return arrayLength(originaArr);
};

export const arrayPop = (arr) => {
    const newArr = [];
    if (arrayLength(arr) < 1) return undefined;
    for (let i = 0; i < arrayLength(arr) - 1; i++) {
        arrayPush(newArr, arr[i]);
    }
    return newArr;
};

export const arrayUnshift = (originaArr, ...newElement) => {
    for (let i = arrayLength(originaArr) - 1; i >= 0; i--) {
        originaArr[i + arrayLength(newElement)] = originaArr[i];
    }
    for (let i = 0; i < arrayLength(newElement); i++) {
        originaArr[i] = newElement[i];
    }
    
    return arrayLength(originaArr);
};

export const arrayShift = (arr) => {
    const newArr = [];
    if (arrayLength(arr) < 1) return undefined;
    for (let i = 1; i < arrayLength(arr); i++) {
        arrayPush(newArr, arr[i]);
    }
    return newArr;
};

export const arraySome = (arr, valueToCheck) => {
    if (arrayLength(arr) < 1) return false;
    if (typeof valueToCheck !== 'function') {
        throw new Error(`ERROR: ${valueToCheck} is not a function`);
    }

    for (let i = 0; i < arrayLength(arr); i++) {
        if (valueToCheck(arr[i])) return true;
    }
    return false;
};
