angular.module('myStarApp')
	.controller('StarController',starCtrl)

	starCtrl.$inject = ['StarFactory']

	function starCtrl() {
		console.log('star controller');
	}