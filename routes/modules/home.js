// const express = require('express')
// const router = express.Router()
// const URL = require('../../modules/URL')
// const shortenURL = require('../../utils/shortenURL') 

// router.get('/', (req, res) => {
//     res.render('index')
// })

// router.post('/', (req, res) => {
//     if (!req.body.url) return res.redirect("/")
//     const shortURL = shortenURL(5)
  
//     URL.findOne({ originalURL: req.body.url })
//       .then(data => data ? data : URL.create({ shortURL, originalURL: req.body.url }))
//       .then(data =>
//         res.render("index", {
//           origin: req.headers.origin,
//           shortURL: data.shortURL,
//         })
//       )
//       .catch(error => console.error(error))
//   })

// module.exports = router