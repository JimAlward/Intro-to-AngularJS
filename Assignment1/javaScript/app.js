(function () {
'use strict';

angular.module('ListChecker', [])
.controller('CheckerController', CheckerController);

CheckerController.$inject = ['$scope'];
function CheckerController($scope) {
  // $scope.LunchList = "";
  $scope.LunchItems = [];
  $scope.numberOfItems = 0;

  $scope.checkLunchList = function () {
    if ($scope.LunchList === "" || $scope.LunchList.trim().length == 0) {
      $scope.LunchListMessage = "Please enter data first!";
    }
    else {
      var spliceIndexs = [];
      var spliceIndex = 0;
      $scope.LunchItems = $scope.LunchList.split(",");
      $scope.numberOfItems = $scope.LunchItems.length;

      for (var i = 0; i < $scope.numberOfItems; i++) {
        if ($scope.LunchItems[i].trim().length > 0) {
        }
        else {
            spliceIndexs[spliceIndex] = i;
            spliceIndex += 1;
        }
      }

      if (spliceIndex > 0) {
        for (var i = spliceIndexs.length - 1; i >= 0; i--) {
          $scope.LunchItems.splice(spliceIndexs[i], 1);
          $scope.numberOfItems--;
        }
      }

      if ($scope.numberOfItems > 3) {
          $scope.LunchListMessage = "Too much!";
      } else if ($scope.numberOfItems == 0) {
          $scope.LunchListMessage = "Please enter data first!";
      } else {
          $scope.LunchListMessage = "Enjoy!";
      }
    }
  };
}

})();
