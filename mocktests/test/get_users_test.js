const expect =  require('chai').expect;
const chai =  require('chai');
const sinon =  require('sinon');
const sinonChai =  require('sinon-chai');
const request =  require('request');
chai.should();
chai.use(sinonChai);

const get_users = require('../get_users');
describe('GetUsers Tests', () => {
    let spy;
    beforeEach(()=> {
        spy = sinon.spy();
        sinon.stub(request, 'get').callsFake((url, callback) => {
            callback({}, {body: '{"users": ["user1","user2"]}'})
        });
    });
    afterEach(() => {
        sinon.restore();
    })
    xit('can call getUsers', () => {
        get_users.getUsers();
    });

    it('Calls the callback', () => {
        get_users.getUsers(spy);
        spy.should.have.been.calledOnce;
    });

    it('Calls the correct URL', () => {
         get_users.getUsers(spy);
        request.get.should.have.been.calledWith("https://www.mysite.com/api/users");
    });
    it('Returns correct data', () => {
        get_users.getUsers(spy);
        spy.should.have.been.calledWith({"users": ["user1","user2"]});
    })
});

//Istanbul for code coverage
//choma plugin for Mocha provides randomising of the execution order
// JSHint to do static code analysis 