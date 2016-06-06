angular.module('myStarApp', ['ui.bootstrap'])
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
				console.log(starCtrl.starData.data)
			})
	}
// =================== ^^ Access JSON   ^^  ============

// pagination http://jasonwatmore.com/post/2016/01/31/AngularJS-Pagination-Example-with-Logic-like-Google.aspx
// pagination http://www.michaelbromley.co.uk/blog/108/paginate-almost-anything-in-angularjs

angular.module('myStarApp')
.controller('PaginationDemoCtrl', function ($scope, $log) {
  $scope.viewby = 10;
  $scope.totalItems = starCtrl.starData.data.length;
  $scope.currentPage = 4;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5; //Number of pager buttons to show

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
});

