var express = require('express');
var router = express.Router();

router.get("*", function (req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = urlService.getShortUrl(shortUrl);
    if (longUrl) {
        res.redirect(longUrl);
    }
});

module.exports = router;