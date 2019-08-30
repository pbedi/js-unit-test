const expect = require('chai').expect;

const asynF = require('../asyn');

it('test_async', (done) => {
    asynF.myAsyncFun((str) => {
        //expect(str).to.equal('doh'); //fails
        expect(str).to.equal('blah');
        done();
    });
});

it('test_promise', () => {
    return asynF.myPromiseFun().then((res) => {
        //expect(res).to.equal('doh'); //fails
        expect(res).to.equal('blah');
    });
});

it('test_async_await', async () => {
    let result = await asynF.myPromiseFun();
    expect(result).to.eq('blah');
});