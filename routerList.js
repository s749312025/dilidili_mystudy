/*
* Created by clarence on 16/12/28
*/

"use strict";

const getTab = require("./express/Tab");
//const getVideoUrl = require("./express/VideoUrl");
//const getList = require("./express/List");
const domain = require("domain");

module.exports = function(app) {

	app.use(function(res, req, next) {
		var d = domain.create();
		d.on('error', function(err) {
			console.error("Am uncaught error occurred");
			console.error(error);
			res.send("出错了！by domain");
		});

		d.add(req);
		d.add(res);
		d.run(next);

		process.on('unhandledRejection', function(err) {
			console.log(err.stack);
			res.send({error:"出错了！"});
		});
	});

	app.get('/', function(req, res) {
		res.send("你访问我干嘛，不是老司机别进来！");
	});

	//跨域
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		next();
	});

	app.get('/getTab', getTab);
//	app.get('/video/*', getVideoUrl);
//	app.get('/list', getList);

}