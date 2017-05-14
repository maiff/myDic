const MyExpress = require('./lib/MyExpress')

const port = 30002

let app = MyExpress()

const allowAll = require('./lib/allow')
app.use(allowAll())

const login = require('./router/login')
app.use('/login', login)

app.listen(port, () => {
  console.log(`listen on ${port}`)
})
