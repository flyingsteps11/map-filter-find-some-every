const some = require('./index');

const assert = require('assert');

describe("some", function() {

    it('Возвращаемый тип данных должен быть boolean', () => {
        let arr = [1, 2, 3];
        assert.equal(typeof arr.some(m => m < 10), 'boolean');
    });

    it('Должен вернуть true', () => {
        let arr = [1,2,3];
        assert.equal(arr.some(m=>m>2), true);
    });

    it('Должен вернуть false', () => {
        let arr = [1,2,3];
        assert.equal(arr.some(m=>m>10), false);
    });

    it('Должен вернуть false для пустого массива', () => {
        let arr = [];
        assert.equal(arr.some(m=>m>10), false);
    });
});