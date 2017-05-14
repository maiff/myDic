let router = require('../lib/MyExpress')()
const bodyParser = require('body-parser')
const sendJson = require('../lib/sendJson')

const add = require('../login/add')
router.use(sendJson())
router.use(bodyParser.urlencoded({ extended: false }))

router.post((req, res) => {
  let cookie = req.body.cookie
  let wordInfo = JSON.parse(req.body.wordInfo)
  add(cookie, wordInfo).then((text) => {
    if (text.indexOf('登录有道') === -1) {
      res.json({
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
