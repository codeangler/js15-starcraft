angular.module('myStarApp')
	.controller('StarController', starCtrl)

	starCtrl.$inject = ['StarFactory'];

	function starCtrl(StarFactory) {
		var starCtrl = this;
		starCtrl.accessData = StarFactory.then(function(resp){
			starCtrl.starData = resp.data;
			console.log(starCtrl.starData);
			console.log(starCtrl.starData.cols);
			console.log(starCtrl.starData.data);

		})
	}