var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

describe('Staff', function (){
    describe('GET /bar', function () {
        it('should return all the bars in the collection', function(done) {
            chai.request(server)
                .get('/bar')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(48);
                    done();
                });
        });
    });
    describe('GET /staff/id', function () {
        it('should return a single staff member from the collection', function(done) {
            chai.request(server)
                .get('/bar/59ff8ce67c2ea71884261f16')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    done();
                });
        });
    });
    describe('POST /Bar', function () {
        it('should return confirmation message and update collection', function(done) {
            var bar = {
                barName: 'McBrides',
                location: 'waterford',
                earnings: 100000
            };
            chai.request(server)
                .post('/bar')
                .send(bar)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Bar  Added!' ) ;
                    done();
                });
        });
    });
    describe('DELETE /bar', function () {
        it('should return confirmation message and delete staff member', function(done) {

            chai.request(server)
                .delete('/bar/5a0182a0478d141c84db73d6')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Bar Deleted!' ) ;
                    done();
                });
        });
    });
    describe('POST /bar/id', function () {
        it('should return confirmation message and update bar earnings', function(done) {
            var earnings = {
                earnings: 50000
            };
            chai.request(server)
                .post('/bar/59ff8ce67c2ea71884261f16')
                .send(earnings)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Bar Wander Inn earnings have been updated!' ) ;
                    done();
                });
        });
    });
});
