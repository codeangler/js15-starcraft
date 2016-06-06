angular.module('myStarApp')
	.controller('PaginationDemoCtrl', paginationDemoCtrl) 

		function paginationDemoCtrl($scope, $log){
		$scope.totalItems = 90;
		$scope.viewby = 10;
		$scope.totalItems = star.starData.length;
		$scope.currentPage = 4;
		$scope.itemsPerPage = $scope.viewby;
		$scope.maxSize = 5; //Number of pager buttons to show
	    $scope.setPage = function (pageNo) {
		      $scope.currentPage = pageNo;
	  		}
	  	}