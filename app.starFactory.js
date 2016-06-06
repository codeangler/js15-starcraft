angular.module('myStarApp')
	.factory('StarFactory',['$http', starFactory])

		function starFactory($http) {
			return $http.get('starCraftData.json')
			
			
		}
// =================== ^^ Create a Factory to access JSON   ^^  ============