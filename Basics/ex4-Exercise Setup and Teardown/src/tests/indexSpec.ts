import newArr from '../index';

const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

describe('Some Suite', () => {
    it('should make a new array containing dog', () => {
        expect(newArr(3, wordArr)).toContain('dog');
    });
    it('make a new array containing 3', () => {
        expect(newArr(3, wordArr)).toContain(3);
    });
})