const chai = require('chai');
const expect = chai.expect;

describe('foo', function() {
    before(function() {
        document.body.insertAdjacentHTML('afterbegin', `
            <input id='go' type='button' value='Go'> Result: <span id='result' />
        `);
        window.foo.init();
    });
    it('should return foo', function() {
        document.getElementById('go').click();
        expect(document.getElementById('result').innerHTML).to.equal('foo');
    });
});