var express = require('express');
var router = express.Router();//express给我提供了一个叫做Router的对象
var bodyParser = require('body-parser');//parse html的body，因为我们会把longurl放在post的html的body里pass过来
var jsonParser = bodyParser.json();//我们知道html是以json的形式发过来
var urlService = require('../services/urlService');

//如果我得到的是"/urls"请求，而且是post的请求时，我们要执行下面的函数
//这是一个handler，handle这个"/urls"而且是post请求
router.post("/urls", jsonParser, function (req, res) {
	var longUrl = req.body.longUrl;//jsonParser会把html里面body里面的json过滤过滤出来，传到一个object里
	var shortUrl = urlService.getShortUrl(longUrl);
	res.json({
		shortUrl: shortUrl,
		longUrl: longUrl
	});
});

//这里可以理解成return
module.exports = router;