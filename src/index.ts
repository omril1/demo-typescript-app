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
        .filter(thing => !thing.someFlag)
        .length;
}

export function countThingsWithFlagUsingIteratorHelpers() {
    return Iterator.from(getIterator())
        .map(({ thing }) => thing)
        .filter(thing => !thing.someFlag)
        .reduce(count => count + 1, 0);
}
