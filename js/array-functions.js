export const arrayLength = (arr) => {
    let length = 0;
    while (arr[length]) {
        length++;
    }
    return length;
};

export const arrayPush = (originaArr, newElement) => {
    originaArr[arrayLength(originaArr)] = newElement;
    return originaArr
};
