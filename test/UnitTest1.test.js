'use strict';

const test = require('ava');
const testMethod = require('../src/testQuestion1.js').testMethod;

test('a first test', t => {
  t.is(testMethod(), 5);
});
