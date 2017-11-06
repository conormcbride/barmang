var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

describe('Staff', function (){
    describe('GET /staff', function () {
        it('should return all the staff members in the collection', function(done) {
            chai.request(server)
                .get('/staff')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(3);
                    done();
                });
        });
    });
    describe('GET /staff/id', function () {
        it('should return a single staff member from the collection', function(done) {
            chai.request(server)
                .get('/staff/59ff64473a6a8891c13bb4a5')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    done();
                });
        });
    });
    describe('POST /staff', function () {
        it('should return confirmation message and update collection', function(done) {
            var staff = {
                name: 'Brian Mcbride',
                wage: 10,
                role: 'waiter'
            };
            chai.request(server)
                .post('/staff')
                .send(staff)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Staff Member Added!' ) ;
                    done();
                });
        });
    });
   describe('POST /staff', function () {
        it('should return confirmation message and update staff members wages', function(done) {
            var staff = {
                wage: 10
            };
            chai.request(server)
                .post('/staff/59ff64473a6a8891c13bb4a5')
                .send(staff)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Staff member Conor McBride rate of pay has been updated!' ) ;
                    done();
                });
        });
    });
});
