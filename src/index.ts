// https://devblogs.microsoft.com/typescript/announcing-typescript-5-6/#iterator-helper-methods
// https://github.com/tc39/proposal-iterator-helpers

function* getIterator() {
    yield { thing: { number: 1, someFlag: false } };
    yield { thing: { number: 2, someFlag: true } };
    yield { thing: { number: 3, someFlag: false } };
    yield { thing: { number: 4, someFlag: true } };
    yield { thing: { number: 5, someFlag: false } };
}

export function countThingsWithFlagUsingArrayMethods() {
    return Array.from(getIterator())
        .map(({ thing }) => thing)
        .filter((thing) => !thing.someFlag).length;
}

export function countThingsWithFlagUsingIteratorHelpers() {
    return getIterator()
        .map(({ thing }) => thing)
        .filter((thing) => !thing.someFlag)
        .reduce((count) => count + 1, 0);
}

export function dropFirstUsingArrayMethods() {
    return Array.from(getIterator()).slice(1);
}

export function dropFirstUsingIteratorHelpers() {
    return getIterator().drop(1).toArray();
}

export function dropAndTakeUsingArrayMethods() {
    return Array.from(getIterator()).slice(1, 3);
}

export function dropAndTakeUsingIteratorHelpers() {
    return getIterator().drop(1).take(2).toArray();
}
