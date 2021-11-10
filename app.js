const express = require('express')
const exphbs = require('express-handlebars')

const routes = require('./routes')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

require('./conifg/mongoose')

app.use(routes)

app.listen(port, () => {
    console.log('App is running on http//:localhost:3000')
})