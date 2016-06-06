angular.module('myStarApp')
	.factory('StarFactory',['$http', starFactory])

		function starFactory($http) {
			var something = console.log("starFactory");
			
			var starFactory = this;
			var starArray = $http.get('starCraftData.json').success(function(res){
				starFactory.starData = res;
				// console.log(res.cols);
				// console.log(res.data);
				console.log(starFactory.starData.data)
			})
			return {
				test: something, 
				dataArray: starArray,
			}
	}
// =================== ^^ Create a Factory to access JSON   ^^  ============