export const setLocal = (nameArr, arr) => localStorage.setItem(nameArr, JSON.stringify(arr));

export const getLocal = (nameArr) => JSON.parse(localStorage.getItem(nameArr));