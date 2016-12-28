"use strict"

const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const routerList = require('./routerList');

const app = express();

var server = app.listen(5055,function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('You are listening at http://%s:%s', host, port);
})

routerList(app);