/*
*Created by shengchao on 16/12/28
*/
"use strict";

let getTabLib = require("../list/getTab");

function getTab(req, res) {
	getTabLib().then(function(data) {
		res.send(data);
	}).catch(function(error) {
		res.send(error);
	});
};

module.exports = getTab;