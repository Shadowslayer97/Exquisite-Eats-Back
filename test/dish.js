process.env.NODE_ENV = "test";

const dish = require('../server/models').Dish;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp)

describe('/GET dish', () => {
    it('it should Get all dishes', (done) => {
        chai.request(app)
        .get('/api/dishes?filterId=1')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});

describe('/POST dish', () => {
    it('it sould post the dish info', (done) => {
        const dish = {
            name: "Sushi",
            rate: 500,
            description: "a salty delight for food lovers",
            hq: 7
        };

        chai.request(app)
        .post('/api/dishes')
        .send(dish)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});
