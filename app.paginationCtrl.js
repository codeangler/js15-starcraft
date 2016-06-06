angular.module('myStarApp')
	.controller('PaginationDemoCtrl', paginationDemoCtrl) 
	paginationDemoCtrl.$inject = ['StarFactory']
		function paginationDemoCtrl($log, StarFactory){
			var pagiCtrl = this;
			$scope.viewby = 10;
			$scope.totalItems = star.starData.length;
			$scope.currentPage = 4;
			$scope.itemsPerPage = $scope.viewby;
			$scope.maxSize = 5; //Number of pager buttons to show
		    $scope.setPage = function (pageNo) {
			      $scope.currentPage = pageNo;
		  		}
		  	starCtrl.accessData = StarFactory.then(function(resp){
				starCtrl.starData = resp.data;
				console.log(starCtrl.starData);
				console.log(starCtrl.starData.cols);
				console.log(starCtrl.starData.data.length);

			})
	  	}