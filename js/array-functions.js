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

export const arrayPush = (originaArr, newElement) => {
    originaArr[arrayLength(originaArr)] = newElement;
    return originaArr;
};

export const arrayPop = (arr) => {
    const newArr = [];
    if (arrayLength(arr) < 2) return undefined;
    for (let i = 0; i < arrayLength(arr) - 1; i++) {
        arrayPush(newArr, arr[i]);
    }
    return newArr;
};