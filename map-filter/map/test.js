const map = require('./index');

const assert = require('assert');

describe("map", function() {

    it('Должен вернуть массив, где каждое число умножено на 3', () => {
        let arr = [1,2,3];
        assert.deepEqual(arr.map(m => m * 3), [3,6,9]);
    });

    it('Должен вернуть пустой массив', () => {
        let arr = [];
        assert.deepEqual(arr.map(m => m + 1), []);
    });
});