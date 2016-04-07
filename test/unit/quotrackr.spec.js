'use strict';

const test = require('tape');
const tapSpec = require('tap-spec');
const quotrackr = require('../../src/quotrackr');

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout);

test('quotrackr', t => {
    test('when instantiated', t => {
        const trackr = quotrackr();

        t.test('should return an object', t => {
            const expected = 'object';
            const actual = typeof trackr;

            t.equal(actual, expected, 'return of quotrackr() is an object');
            t.end();
        });
        t.end();
    });

    t.end();
});
