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

// angular.module('myStarApp')
// 	.controller('StarPagination', pagiCtrl)
// 	StarPagination.$inject = ['']