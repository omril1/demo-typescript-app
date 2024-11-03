import * as assert from 'node:assert';
import { test } from 'node:test';
import { countThingsWithFlagUsingArrayMethods, countThingsWithFlagUsingIteratorHelpers } from './index';

test('countThingsWithFlag', () => {
    assert.equal(countThingsWithFlagUsingArrayMethods(), countThingsWithFlagUsingIteratorHelpers());
});