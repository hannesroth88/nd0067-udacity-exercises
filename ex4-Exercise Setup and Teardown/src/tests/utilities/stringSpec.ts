import strings from '../../utilities/strings';


describe('Parent Suite STRINGS', () => {

    describe('test capitalize()', () => {
        it('should capitalize a string', () => {
            expect(strings.capitalize('a sentence')).toEqual('A Sentence');
        });
        it('should allow sentence to remain capitalized', () => {
            expect(strings.capitalize('A Sentence')).toEqual('A Sentence');
        });
    });
});