const login = require('../../router/login')
const request = require('supertest')
const connect = require('../../lib/MyExpress')
const assert = require('assert')


describe('login', () => {
  it('login success', (done) => {
    let app = connect()
    app.use('/login', login)
    app.listen(0, function () {
      request(app)
      .post('/login')
      .type('form')
      .send({
        username: 'webstudy616@163.com',
        password: '2101239xwt'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).status, 1)
        done()
      })
    })
  })

  it('login fail', (done) => {
    let app = connect()
    app.use('/login', login)
    app.listen(0, function () {
      request(app)
      .post('/login')
      .type('form')
      .send({
        username: 'webstudy616@163.com',
        password: '2101239xwt1'
      })
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).status, 0)
        done()
      })
    })
  })
})