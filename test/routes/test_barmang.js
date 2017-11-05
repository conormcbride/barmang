var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;


chai.use(chaiHttp);
var _ = require('lodash' );
chai.use(require('chai-things'));

describe('Staff', function (){
    beforeEach(function(){
        describe('POST /staff', function () {
            it('should return staff added and incriment the staff array', function(done) {
                var staff = {
                    id: 0 ,
                    name: "brian",
                    wage: 100,
                    role: "waiter",
                    daysabsent: 0
                };
                chai.request(server)
                    .post('/staff')
                    .send(staff)
                    .end(function(err, res) {
                        expect(res).to.have.status(200);
                        expect(res.body).to.have.property('message').equal('Staff member added' ) ;
                        expect(staff).to.have.length(4);
                        done();
                    });
            });
            /*after(function (done) { chai.request(server) .get('/staff')
                .end(function(err, res) { var result = _.map(res.body, function (staff)
                { return { paymenttype: donation.paymenttype, amount: donation.amount }; } );
                expect(result).to.include( { paymenttype: 'Visa', amount: 1200 } ); done(); }); });*/
        });





    });
});