const find = require('./index');

const assert = require('assert');

describe("find", function() {

    it('Массив чисел. Должен вернуть 3', () => {
        let arr = [3, 4, 5];
        assert.equal(arr.find(m => m < 4), 3);
    });

    it('Массив чисел. Должен вернуть undefined', () => {
        let arr = [4, 5, 6];
        assert.equal(arr.find(m => m > 10), undefined);
    });

    it('Пустой массив. Должен вернуть undefined', () => {
        let arr = [];
        assert.deepEqual(arr.find(m=> m > 1), undefined);
    });

    it('Массив строк. Должен вернуть "doggie"', () => {
        let arr = ['dog','doggie','dig'];
        assert.deepEqual(arr.find(m=> m.length === 6), 'doggie');
    });

});