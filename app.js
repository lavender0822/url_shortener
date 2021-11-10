const express = require('express')
const exphbs = require('express-handlebars')
require('./conifg/mongoose')

const URL = require('./modules/URL')
const shortenURL = require('./utils/shortenURL')
// const routes = require('./routes')


const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extened: true }))
// app.use(routes)

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", (req, res) => {
    if (!req.body.url) return res.redirect("/")
    const shortURL = shortenURL(5)

    URL.findOne({ originalURL: req.body.url })
        .then(data => data ? data : URL.create({ shortURL, originalURL: req.body.url }))
        .then(data =>
            res.render("index", {
                origin: req.headers.origin,
                shortURL: data.shortURL,
            })
        )
        .catch(error => console.error(error))
})

app.get("/:shortURL", (req, res) => {
    const { shortURL } = req.params


    URL.findOne({ shortURL })
        .then(data => {
            if (!data) {
                return res.render("error", {
                    errorMsg: "Can not found the URL",
                    errorURL: req.headers.host + "/" + shortURL,
                })
            }

            res.redirect(data.originalURL)
        })
        .catch(error => console.error(error))
})

app.listen(port, () => {
    console.log('App is running on http//:localhost:3000')
})