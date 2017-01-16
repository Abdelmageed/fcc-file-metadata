const express = require ('express'),
      app = express (),
      multer = require ('multer'),
      upload = multer ()

app.use (express.static('public'))

app.post ('/upload', upload.single ('testFile'), (req, res, next) => {
    res.send ({size: req.file.size})
})

app.listen (process.env.PORT || 3000, function () {
    console.log (`express server listening on port ${this.address().port} in ${app.settings.env} mode`)
}) 