jest.dontMock('../app/components/sum')

const sum = require('../app/components/sum')

describe('sum', () => {
 it('adds 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3)
 });
});

