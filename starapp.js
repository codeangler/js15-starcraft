angular.module('myStarApp', [])
angular.module('myStarApp')
angular.module('myStarApp')
	.controller('StarController',['$http', starCtrl])

function starCtrl($http) {
	console.log("starCtrl");
	var starCtrl = this;
	$http.get('starCraftData.json').success(function(res){
		starCtrl.starData = res;
		// console.log(res.cols);
		// console.log(res.data);
		console.log(starCtrl.starData.data.$index)
	})
}