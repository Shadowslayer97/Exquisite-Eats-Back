process.env.NODE_ENV = "test";

const OrderList = require('../server/models').Order_list;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp)

describe('/GET order list', () => {
    it('it should Get all order lists', (done) => {
        chai.request(app)
        .get('/api/order/list')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('/POST order list', () => {
    it('it sould post the order list info', (done) => {
        const orderList = {
            delivery: new Date().getTime(),
            total: 5000,
            dishes:[
              {
                dishId:1,
                quantitiy:3
              }
            ]
        };

        chai.request(app)
        .post('/api/order/list/1')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});
