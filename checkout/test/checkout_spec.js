const expect = require('chai').expect;
const Checkout = require('../modules/checkout');
let checkout;

beforeEach(() => {
    checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
}) 
xit('Can instantiate checkout', () => {
    let checkout = new Checkout();
});

xit('Can add item price', () => {
    checkout.addItemPrice('a', 1);
});

xit('Can add item', () => {
    checkout.addItemPrice('a', 1);
    checkout.addItem('a');
});

it('Can calculate the current total', () => {
    
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
});

it('Can add multiple items and get correct total', () => {
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
});

it('Can add a discount', () => {
    checkout.addDiscount('a', 3, 2);
});

it('Can apply discount rules to the total', () => {
    checkout.addDiscount('a', 3, 2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2);
});

it('Throws error when item added with no price', () => {
    expect(function(){checkout.addItem('c')}).to.throw();
});