process.env.NODE_ENV = "test";

const User = require('../server/models').User;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp)

describe('/GET user', () => {
    it('it should Get all users', (done) => {
        chai.request(app)
        .get('/api/users')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});

describe('/POST user', () => {
    it('it sould post the user info', (done) => {
        const user = {
            name: "Rohan swaraj",
            mobile: 5667,
            email: "asma@gmail.com",
            address: "908/y street, sector A , navi vihar-19"
        };

        chai.request(app)
        .post('/api/users')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});
