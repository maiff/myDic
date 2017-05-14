let router = require('../lib/MyExpress')()
const bodyParser = require('body-parser')
const sendJson = require('../lib/sendJson')

const login = require('../login/login')
router.use(sendJson())
router.use(bodyParser.urlencoded({ extended: false }))

router.post((req, res) => {
  let username = req.body.username
  let password = req.body.password
  login(username, password).then((cookie) => {
    if (cookie.length === 3) {
      res.json({
        cookie: cookie,
        status: 1
      })
    } else {
      res.json({
        status: 0
      })
    }
  }, (err) => {
    console.log(err)
    res.json({
      status: 0
    })
  })
})

module.exports = router
