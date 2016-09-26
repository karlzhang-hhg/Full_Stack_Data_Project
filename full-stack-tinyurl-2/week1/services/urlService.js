var longToShortHash = {};
var shortToLongHash = {};

var getShortUrl = function (longUrl) {
	//处理输入的网址不是url的情况
	if(longUrl.indexOf('http') === -1) {
		longUrl = "http://"+longUrl;
	}
	if (longToShortHash[longUrl] != null) {
		return longToShortHash[longUrl];
	} else {
		var shortUrl = generateShortUrl();
		longToShortHash[longUrl] = shortUrl;
		shortToLongHash[shortUrl] = longUrl;
		return shortUrl;
	}
};

//这个函数外部是访问不了的，因为不在module.exports里面
var generateShortUrl = function () {
	return Object.keys(longToShortHash).length;
};

var getLongUrl = function (shortUrl) {
	return shortToLongHash[shortUrl];
}

//外部只能调用getShortUrl这个函数，而其他的函数和变量外部是无法调用的
module.exports = {
	getShortUrl: getShortUrl,
	getLongUrl: getLongUrl
};