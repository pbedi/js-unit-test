const expect = require('chai').expect;

describe('test_suite1', () => {
    
    beforeEach('Setup each', () => {
        console.log('Setup each');
    });
    
    before('setup code', () => {
        console.log('Setup code');
    });

    after('teardown code', () => {
        console.log('Teardown code');
    });

    it('Test 1', () => {
        console.log('Test1');
        expect(true).to.equal(true);
    });

    it('Test 2', () => {
        console.log('Test2');
        expect(true).to.equal(true);
    });
})