export const arrayLength = (arr) => {
    let length = 0;
    while (arr[length]) {
        length++;
    }
    return length;
};