const filter = require('./index');

const assert = require('assert');

describe("filter", function() {

    it('Должен вернуть массив с числами меньше или равно 4', () => {
        let arr = [1, 2, 3, 4, 5];
        assert.deepEqual(arr.filter(m => m <= 4), [1, 2, 3, 4]);
    });

    it('Должен вернуть пустой массив', () => {
        let arr = [];
        assert.deepEqual(arr.filter(m => m >10), []);
    });

    it('Должен вернуть массив с длинной строк <3', () => {
        let arr = ['req','dig','do','re','misha','s'];
        assert.deepEqual(arr.filter(m => m.length < 3), ['do','re','s']);
    });
});