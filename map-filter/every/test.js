const every = require('./index');

const assert = require('assert');

describe("every", function() {

    it('Возвращаемый тип данных должен быть boolean', () => {
        let arr = [1, 2, 3];
        assert.equal(typeof arr.every(n => n < 10), 'boolean');
    });

    it('Массив чисел. Должен вернуть true', () => {
        let arr = [1, 2, 3];
        assert.equal(arr.every(n => n < 10), true);
    });

    it('Массив чисел. Должен вернуть false', () => {
        let arr = [1, 2, 3];
        assert.equal(arr.every(n => n > 10), false);
    });

    it('Должен вернуть true при любом условии для пустого массива', () => {
        let arr = [];
        assert.equal(arr.every(ss => ss>10), true);
    });
});