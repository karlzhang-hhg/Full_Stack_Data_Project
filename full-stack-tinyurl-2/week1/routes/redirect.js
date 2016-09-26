var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService');

//“*”代表任何东西，我现在就认为你就是有一个短连接，要导入到一个长连接，后面再做exception
router.get("*", function (req, res) {
	//现在我的shortUrl的形式是：/0；我们用.slice(1)，相当于从第二元素开始取
	var shortUrl = req.originalUrl.slice(1);//js字符串的基本操作
	var longUrl = urlService.getLongUrl(shortUrl); 
	res.redirect(longUrl);
});

module.exports = router;