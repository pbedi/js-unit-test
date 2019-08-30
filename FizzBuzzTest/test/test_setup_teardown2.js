const expect = require('chai').expect;

beforeEach('root setup each', () => {
    console.log('Root Setup each');
});

before('root setup code', () => {
    console.log('Root Setup code');
});

after('root teardown code', () => {
    console.log('Root Teardown code');
});
describe('test_suite2', () => {

    it('Test 3', () => {
        console.log('Test3');
        expect(true).to.equal(true);
    });
});