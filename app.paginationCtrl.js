angular.module('myStarApp')
  .controller('PaginationDemoCtrl', paginationDemoCtrl) 
  paginationDemoCtrl.$inject = ['StarFactory'];
    function paginationDemoCtrl(StarFactory){
      var pagiCtrl = this;
      pagiCtrl.viewby = 10;
      pagiCtrl.currentPage = 4;
      pagiCtrl.itemsPerPage = pagiCtrl.viewby;
      pagiCtrl.maxSize = 5; //Number of pager buttons to show
     
      pagiCtrl.setPage = function (pageNo) {
             pagiCtrl.currentPage = pageNo;
      }

      pagiCtrl.pageChanged = function() {
          console.log('Page changed to: ' + pagiCtrl.currentPage);
        };
      pagiCtrl.setItemsPerPage = function(num) {
        pagiCtrl.itemsPerPage = num;
        pagiCtrl.currentPage = 1; //reset to first paghe
      }

        pagiCtrl.accessData = StarFactory.then(function(resp){
        pagiCtrl.starData = resp.data;
        // console.log(pagiCtrl.starData);
        // console.log(pagiCtrl.starData.cols);
        // console.log("from pagiCtrl", pagiCtrl.starData.data.length);
        pagiCtrl.totalItems = pagiCtrl.starData.data.length;
      })

      

      }