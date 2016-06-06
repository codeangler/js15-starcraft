angular.module('myStarApp')
	.controller('StarController', starCtrl)

	starCtrl.$inject = ['StarFactory'];

	function starCtrl(StarFactory) {
		StarFactory.then(function(resp){
			console.log("hi from StarCtrl", resp.data.cols);

		})
	}