const controller = require("./home.controller.js");
const template = require("./home.html");

const component = {
	controller: controller,
	template: template
};

angular
	.module("portfolio")
	.component("home", component)
