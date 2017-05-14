const login = require('../../login/login')
const add = require('../../router/add')
const request = require('supertest')
const connect = require('../../lib/MyExpress')
const assert = require('assert')


describe('add', () => {
  it('add success', (done) => {
    login('webstudy616@163.com', '2101239xwt').then((cookie) => {
      let app = connect()
      app.use('/add', add)
      app.listen(0, function () {
        request(app)
        .post('/add')
        .type('form')
        .send({
          cookie: cookie + '',
          wordInfo: JSON.stringify({
            word: 'love',
            desc: 'n 爱 爱情'
          })
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
  })

  // it('login fail', (done) => {
  //   let app = connect()
  //   app.use('/login', login)
  //   app.listen(0, function () {
  //     request(app)
  //     .post('/login')
  //     .type('form')
  //     .send({
  //       username: 'webstudy616@163.com',
  //       password: '2101239xwt1'
  //     })
  //     // .expect('Content-Type', /json/)
  //     // .expect(200)
  //     .end((err, res) => {
  //       if (err) return done(err)
  //       // console.log(res.text)
  //       assert.equal(JSON.parse(res.text).status, 0)
  //       done()
  //     })
  //   })
  // })
})