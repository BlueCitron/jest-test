const sum = require('../src/sum');

describe('Story', () => {
    describe('Senario', () => {

        it('첫 번째 테스트', () => {
            expect(sum(1, 2)).toBe(3);
        })

        it('두 번째 테스트', () => {
            expect(sum(2, 3)).toBe(5);
        })
    })
})
