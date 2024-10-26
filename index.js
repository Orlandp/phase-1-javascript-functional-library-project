function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const newArray = [];
    for (let i = 0; i < values.length; i++) {
        newArray.push(callback(values[i]));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
    if (acc === undefined) {
        acc = values[0];
        startIdx = 1;
    }
    for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    const keys = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function myValues(object) {
    const values = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}

function mySortBy(array, callback) {
    const sortedArray = [...array];
    sortedArray.sort((a, b) => {
        const aVal = callback(a);
        const bVal = callback(b);
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
    });
    return sortedArray;
}

function myFlatten(array, shallow = false, newArr = []) {
    for (const item of array) {
        if (Array.isArray(item)) {
            if (shallow) {
                newArr.push(...item);
            } else {
                myFlatten(item, shallow, newArr);
            }
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}
