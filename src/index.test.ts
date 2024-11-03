import * as assert from 'node:assert';
import { test } from 'node:test';
import {
    dropFirstUsingArrayMethods,
    dropFirstUsingIteratorHelpers,
    countThingsWithFlagUsingArrayMethods,
    countThingsWithFlagUsingIteratorHelpers,
    dropAndTakeUsingArrayMethods,
    dropAndTakeUsingIteratorHelpers,
} from './index';

test('map-filter-count', () => {
    assert.equal(countThingsWithFlagUsingArrayMethods(), countThingsWithFlagUsingIteratorHelpers());
});

test('slice', () => {
    assert.deepEqual(dropFirstUsingArrayMethods(), dropFirstUsingIteratorHelpers());
});

test('drop-and-take', () => {
    assert.deepEqual(dropAndTakeUsingArrayMethods(), dropAndTakeUsingIteratorHelpers());
});
