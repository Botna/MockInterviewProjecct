'use strict';

const test = require('ava');
const rp = require('request-promise').defaults({
    resolveWithFullResponse: true
});

test('a first test', t => {
    const request = {
        uri: 'https://google.com'
    };
    return rp(request)
            .then(response => {
                t.true(response.statusCode === 200);
            });
    t.true(true);
});
